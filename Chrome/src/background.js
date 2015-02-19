var paused = false; // Global sentinel

function addPause() {
    chrome.contextMenus.create({
        "title": "Pause Scrolling",
        "id": "pause",
    });
}

addPause();

function addResume() {
    chrome.contextMenus.create({
        "title": "Resume Scrolling",
        "id": "resume",
    });
}

function handleClick() {
    paused = !paused;

    if (paused) {
        sendMessage(true);
        chrome.contextMenus.remove("pause");
        addResume();
    } else {
        sendMessage(false);
        chrome.contextMenus.remove("resume");
        addPause();
    }
}

chrome.contextMenus.onClicked.addListener(handleClick);

// Send pause message to injected script
function sendMessage(shouldPause) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            pause: shouldPause
        });
    });
}
