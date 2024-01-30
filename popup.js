console.log('This is a popup');

// background.js or popup.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.html) {
      console.log("HTML Content: ", request.html);
      // Process the HTML content here
    }
});
  