// iframe.js
chrome.runtime.onMessage.addListener((message) => {
    if (message.url) {
        document.getElementById('iframe').src = message.url;
    }
});
