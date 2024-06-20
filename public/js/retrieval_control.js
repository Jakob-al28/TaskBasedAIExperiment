/**
 * This script tracks user interactions on the 'generative_control.html' page.
 * It counts the number of times the user tabs out of the page, records inputs in text boxes, records the search engine keyword and links clicked
 * and calculates the time spent on the page.
 * 
 * The interaction data is structured into an object and can be saved for further analysis.
 * 
 */
let tabOutCount = 0;
let textBoxInputs = new Map();
let startTime = Date.now();
var page = 1;

// Track tab out events
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        tabOutCount++;
    }
});

// Track text box inputs
document.querySelectorAll('textarea').forEach(input => {
    input.addEventListener('input', function() {
        textBoxInputs.set(input.id, input.value);
    });
});

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        textBoxInputs.set(input.id, input.value);
    });
});


// Send interaction data to the server
function saveInteractionData() {
    const timeSpentMs = Date.now() - startTime;
    const timeSpent = Math.floor(timeSpentMs / 1000);
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    const interactionData = {
        userId,
        pageInteractions: [{
            page: 'retrieval_control.html',
            timeSpent: timeSpent,
            tabbedOutCount: tabOutCount,
            queryCount: queryCount,
            textBoxInputs: Array.from(textBoxInputs.entries()),
            searchQueries: searchQueries // searchQueries is defined in script_retrieval.js
        }]
    };

    // Save data to localStorage
    localStorage.setItem('interactionData', JSON.stringify(interactionData));
}

// Save data before the user leaves the page
window.addEventListener('beforeunload', saveInteractionData);
