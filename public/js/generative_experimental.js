/**
 * This script tracks user interactions on the 'generative_control.html' page.
 * It counts the number of times the user tabs out of the page, records inputs in text boxes, records the LLM query and answers
 * and calculates the time spent on the page.
 * 
 * The interaction data is structured into an object and can be saved for further analysis.
 * 
 */
let tabOutCount = 0;
let textBoxInputs = new Map();
let llmQueryResponses = new Map();
let startTime = Date.now();

// Track tab out events
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        tabOutCount++;
    }
});

// Track text box inputs
document.querySelectorAll('textarea').forEach(input => {
    input.addEventListener('input', function() {
        textBoxInputs.set(input.name, input.value);
    });
});

// Function to submit LLM query and track responses
function trackLlmQueryResponse(query, response) {
    llmQueryResponses.set(query, response);
}

function saveInteractionData() {
    const timeSpentMs = Date.now() - startTime;
    const timeSpent = Math.floor(timeSpentMs / 1000);
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    const interactionData = {
        userId,
        pageInteractions: [{
            page: 'generative_experimental.html',
            timeSpent: timeSpent,
            tabbedOutCount: tabOutCount,
            queryCount: queryCount,
            textBoxInputs: Array.from(textBoxInputs.entries()),
            llmQueryResponses: llmQueryResponse
        }]
    };

    // Save data to localStorage
    localStorage.setItem('interactionData', JSON.stringify(interactionData));
}

// Save data before the user leaves the page
window.addEventListener('beforeunload', saveInteractionData);