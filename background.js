// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // chrome.browserAction.setBadgeText({text: "CHA!"});
  chrome.tabs.executeScript(null, {file: "content.js"});
});
