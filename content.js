// content.js
let htmlContent = document.documentElement.outerHTML;
console.log(htmlContent); // For demonstration

// To send this data to the background script or popup
chrome.runtime.sendMessage({html: htmlContent});
