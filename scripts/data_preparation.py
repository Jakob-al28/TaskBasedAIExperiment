"""
This script reads the test.users.json file and processes the data to create a single Excel file with multiple sheets and adirectory with csv files.
"""
import os
import json
import pandas as pd

with open('../data/test.users.json', encoding='utf-8') as f:
    data = json.load(f)

zipped_data = []

for user in data:
    surveyResponses = user.get('surveyResponse', [])
    pageInteractions = user.get('pageInteractions', [])

    # Ensure we have equal lengths by trimming the longer list
    min_length = min(len(surveyResponses), len(pageInteractions))
    surveyResponses = surveyResponses[:min_length]
    pageInteractions = pageInteractions[:min_length]

    # Zip the responses and interactions
    for i in range(min_length):
        zipped_entry = {
            **surveyResponses[i],
            **pageInteractions[i]
        }
        # Remove unwanted attributes
        if 'userId' in zipped_entry:
            del zipped_entry['userId']
        if 'updatedAt' in zipped_entry:
            del zipped_entry['updatedAt']
        if '_id' in zipped_entry:
            zipped_entry['_id'] = zipped_entry['_id'].get('$oid', zipped_entry['_id'])
        if 'createdAt' in zipped_entry:
            zipped_entry['createdAt'] = zipped_entry['createdAt'].get('$date', zipped_entry['createdAt'])

        zipped_data.append(zipped_entry)

df = pd.DataFrame(zipped_data)
# Reorder the columns
column_order = ['page', 'tabbedOutCount', 'textBoxInputs', 'llmQueryResponses', 'searchQueries','queryCount','timeSpent', 'age', 'gender', 'occupation', 'location', 'education', 'taskTimeSufficient', 'instructionsClear', 'taskDifficulty', 'toolsEffective', 'productivityImproved', 'attentionCheck', 'aiToolUsage', 'cookie', '_id', 'createdAt', 'AIsentiment']
df = df.reindex(columns=column_order)

# Expand textBoxInputs into separate columns
text_box_inputs = df['textBoxInputs'].apply(pd.Series)
text_box_inputs.columns = [f'textBox_{col}' for col in text_box_inputs.columns]
df = df.drop('textBoxInputs', axis=1).join(text_box_inputs)

# Filter and save sheets for specific tasks
generative_task_data = df[df['page'].isin(['generative_control.html', 'generative_experimental.html'])]
retrieval_task_data = df[df['page'].isin(['retrieval_control.html', 'retrieval_experimental.html'])]

# Function to normalize dictionary data
def normalize_json(df, column):
    normalized_rows = []
    for _, row in df.iterrows():
        if isinstance(row[column], dict): 
            for key, value in row[column].items():
                normalized_rows.append({'_id': row['_id'], 'Query': key, 'Response': value})
    return pd.DataFrame(normalized_rows)

normalized_generative = normalize_json(generative_task_data, 'llmQueryResponses')
normalized_retrieval = normalize_json(retrieval_task_data, 'llmQueryResponses')

columns_to_remove = ['searchQueries', 'textBox_notepad', 'textBox_subscription-right', 'textBox_search-input', 'textBox_calculator-input', 'textBox_search-input-2']
generative_task_data = generative_task_data.drop(columns=columns_to_remove)
columns_to_remove_retrieval = ['textBox_search-input', 'textBox_search-input-2', 'textBox_topic1', 'textBox_topic2', 'textBox_topic3']
retrieval_task_data = retrieval_task_data.drop(columns=columns_to_remove_retrieval)
    
generative_task_data = generative_task_data.iloc[:, [18,0,1,21,22,23] + list(range(3, 17)) + [20,17,19,2]]
retrieval_task_data = retrieval_task_data.iloc[:, [19,0,1,23,22,24] + list(range(4, 18)) + [21,19,20,2,3]]

generative_task_data = generative_task_data.sort_values('page')
retrieval_task_data = retrieval_task_data.sort_values('page')

writer = pd.ExcelWriter('../data/processed_data.xlsx', engine='xlsxwriter')

try:
    generative_task_data.to_excel(writer, sheet_name='Generative Task Data', index=False)
    retrieval_task_data.to_excel(writer, sheet_name='Retrieval Task Data', index=False)

    llm_query_responses_data = generative_task_data[['_id', 'llmQueryResponses']]
    llm_query_responses_data = pd.concat([llm_query_responses_data.drop(['llmQueryResponses'], axis=1), llm_query_responses_data['llmQueryResponses'].apply(pd.Series)], axis=1)

    retrieval_query_responses_data = retrieval_task_data[['_id', 'llmQueryResponses']]
    retrieval_query_responses_data = pd.concat([retrieval_query_responses_data.drop(['llmQueryResponses'], axis=1), retrieval_query_responses_data['llmQueryResponses'].apply(pd.Series)], axis=1)
    
    normalized_generative.to_excel(writer, sheet_name='Generative LLM Query Responses', index=False)
    normalized_retrieval.to_excel(writer, sheet_name='Retrieval Query Responses', index=False)
    
    writer.close()  

    # Save each DataFrame to a separate CSV file
    if not os.path.exists('../data/csv'):
        os.makedirs('../data/csv')

    generative_task_data.to_csv('../data/csv/generative_task_data.csv', index=False, encoding='utf-8-sig', errors='replace')
    retrieval_task_data.to_csv('../data/csv/retrieval_task_data.csv', index=False, encoding='utf-8-sig', errors='replace')
    normalized_generative.to_csv('../data/csv/normalized_generative.csv', index=False, encoding='utf-8-sig', errors='replace')
    normalized_retrieval.to_csv('../data/csv/normalized_retrieval.csv', index=False, encoding='utf-8-sig', errors='replace')
    print("Data has been processed and saved to 'processed_data.xlsx'")
except Exception as e:
    print(f"Error: {e}")
