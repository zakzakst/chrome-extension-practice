const button = document.getElementById("getUrlButton");
const urlElement = document.getElementById("url");

button.addEventListener("click", async () => {
  const tabs = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  const currentTab = tabs[0];

  urlElement.textContent = currentTab.url;
});