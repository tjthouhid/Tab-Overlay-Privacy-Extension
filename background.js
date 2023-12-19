chrome.runtime.onInstalled.addListener(function() {
    console.log("Tab Overlay Privacy Extension installed!");
  });
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'blurAddressBar') {
      // Blur the address bar
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: () => {
            document.body.style.filter = 'blur(5px)'; // Adjust the blur amount as needed
          }
        });
      });
    } else if (request.action === 'unblurAddressBar') {
      // Unblur the address bar
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: () => {
            document.body.style.filter = 'none';
          }
        });
      });
    }
  });
  