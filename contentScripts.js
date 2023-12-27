window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
    // If Cmd for Mac or Ctrl for Windows/Linux was pressed, or if the clicked element is not an anchor, do not do anything.
    if (e.metaKey || e.ctrlKey || e.target.tagName !== "A") {
        return;
    }

    var linkUrl = new URL(e.target.href);
    var currentUrl = new URL(window.location.href);

    // Only handle links that lead to a different origin
    if (linkUrl.origin !== currentUrl.origin) {
        e.preventDefault();
        chrome.runtime.sendMessage({ url: e.target.href });
    }
}

