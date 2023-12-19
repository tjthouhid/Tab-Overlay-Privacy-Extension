// Create overlay element
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.background = 'white'; // Change to 'black' for a black overlay
overlay.style.opacity = '1';
overlay.style.zIndex = '99999';
overlay.style.pointerEvents = 'none'; // Allow interaction with elements behind the overlay
overlay.style.display = 'none';
// Append overlay to the body
document.body.appendChild(overlay);

// Event listener for tab focus change
window.addEventListener('blur', handleBlur);
window.addEventListener('focus', handleFocus);

function handleBlur() {
  // Add overlay when tab is not focused
  overlay.style.display = 'block';
  //window.window.location = "https://---------";
  //console.log(window.window.location)
  // Blur the address bar
  //sendMessageToBackground({ action: 'blurAddressBar' });
}

function handleFocus() {
  // Remove overlay when tab is focused
  overlay.style.display = 'none';
  // Unblur the address bar
  //sendMessageToBackground({ action: 'unblurAddressBar' });
}

// function sendMessageToBackground(message) {
//   // Check if the runtime is available and connected
//   if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
//     // Send the message to the background script
//     chrome.runtime.sendMessage(message);
//   } else {
//     console.error('Unable to send message to background script.');
//   }
// }
