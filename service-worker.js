chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });

const HN_ORIGIN = 'https://news.ycombinator.com';

// Function to handle tab updates
async function handleTabUpdate(tabId, tabUrl) {
    const url = new URL(tabUrl);
    if (url.origin === HN_ORIGIN) {
        // Enables the side panel for Hacker News
        await chrome.sidePanel.setOptions({
            tabId,
            path: 'sidepanel.html',
            enabled: true
        });
    } else {
        // Disables the side panel on other sites
        await chrome.sidePanel.setOptions({
            tabId,
            enabled: false
        });
    }
}

// Listener for tab updates
chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
    // Ensures that the tab has a URL property and is not in loading state
    if (tab.url && info.status === 'complete') {
        handleTabUpdate(tabId, tab.url).catch(err => console.error('Error handling tab update:', err));
    }
});

// Listener for messages from other scripts
chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.url && sender.tab) {
        (async () => {
            try {
                await chrome.sidePanel.open({ tabId: sender.tab.id });
                await chrome.sidePanel.setOptions({
                    tabId: sender.tab.id,
                    path: 'sidepanel.html',
                    enabled: true
                });
                chrome.runtime.sendMessage({ url: message.url });
            } catch (err) {
                console.error('Error in side panel operations:', err);
            }
        })();
    }
});

