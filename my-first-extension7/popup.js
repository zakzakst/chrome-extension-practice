const button = document.getElementById("changeColorButton");

button.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    type: "CHANGE_PAGE_COLOR",
    color: "yellow",
  });
});