var paused = false; // Global sentinel

// Pause items for context menu & toolbar icon
function addPause() {
    chrome.contextMenus.create({
        "title": "Pause Scrolling",
        "id": "pause",
    });

    chrome.contextMenus.create({
        title: "Pause Scrolling",
        contexts: ["browser_action"],
        "id": "menu_pause"
    });
}

// Resume menus for context menu & toolbar icon
function addResume() {
    chrome.contextMenus.create({
        "title": "Resume Scrolling",
        "id": "resume",
    });

    chrome.contextMenus.create({
        "title": "Resume Scrolling",
        "contexts": ["browser_action"],
        "id": "menu_resume"
    });
}

// Toggle between paused & resumed
function handleClick() {
    paused = !paused;

    if (paused) {
        sendMessage(true);
        chrome.contextMenus.remove("pause");
        chrome.contextMenus.remove("menu_pause");
        addResume();
    } else {
        sendMessage(false);
        chrome.contextMenus.remove("resume");
        chrome.contextMenus.remove("menu_resume");
        addPause();
    }
}

chrome.contextMenus.onClicked.addListener(handleClick);

// Send pause message to injected script
function sendMessage(shouldPause) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "pause": shouldPause
        });
    });
}

// Add the pause items to start
addPause();