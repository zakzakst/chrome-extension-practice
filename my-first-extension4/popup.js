const button = document.getElementById("changeColorButton");

button.addEventListener("click", async () => {
  const tabs = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  chrome.tabs.sendMessage(tabs[0].id, {
    type: "CHANGE_COLOR",
  });
});