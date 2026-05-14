chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "CHANGE_COLOR") {
    document.body.style.backgroundColor = message.color;
  }
});