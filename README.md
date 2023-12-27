# Hacker-Split: Browse hackernews in one-tab!

## What is Hacker-Split?
This extension simplifies viewing any hackernews posts within the integrated sidebar view. Simply click on any post, and you'll instantly have the HackerNews discussion and the post itself displayed side-by-side in a convenient dual-pane layout on the same tab.

## Running this extension(currently not available on the Chrome web store)
1. Clone this repository.
2. Load this directory in Chrome as an [unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).
3. Go to https://www.news.ycombinator.com.
4. How can I open the sidebar view? Click on any of the HN posts you want to explore. The post will automatically open in the sidebar.

## See It in Action
Watch the video to see how Hacker-Split works:
[![Watch the video](https://img.youtube.com/vi/jHjtJ8V7Dis/0.jpg)](https://www.youtube.com/watch?v=jHjtJ8V7Dis)

## Permissions:
I've tried to keep the permissions to a minimum as compared to the generic sidebar extensions. Help me improve it further by suggesting changes.
Here's the breakdown of the limited permissions HackerSplit requests:
1. sidePanel: Enables the creation of a dedicated sidebar for HackerNews browsing.
2. host_permissions for https://news.ycombinator.com/*: Allows the extension to access the HackerNews website.
3. content_scripts to run exclusively on https://news.ycombinator.com/*

## NOTE: Hackersplit uses public CORS proxy to bypass the x-frame-options header on websites that have a deny policy set. This is not a secure way to browse the web. Please use this extension at your own risk.
The code to bypass the x-frame-options is sourced from [this repository](https://github.com/niutech/x-frame-bypass).

## Known Issues
When attempting to open another link from a post within the sidebar, it won't work if there's a CORS or x-frame-options policy in place.

