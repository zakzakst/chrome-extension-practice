chrome.runtime.onMessage.addListener(
  async (message, sender, sendResponse) => {
    if (message.type === "CHANGE_PAGE_COLOR") {
      const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });

      chrome.tabs.sendMessage(tabs[0].id, {
        type: "CHANGE_COLOR",
        color: message.color,
      });
    }
  }
);