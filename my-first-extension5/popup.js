const memoElement = document.getElementById("memo");
const saveButton = document.getElementById("saveButton");
const statusElement = document.getElementById("status");

async function loadMemo() {
  const result = await chrome.storage.local.get("memo");

  memoElement.value = result.memo || "";
}

async function saveMemo() {
  const memo = memoElement.value;

  await chrome.storage.local.set({
    memo: memo,
  });

  statusElement.textContent = "保存しました！";
}

saveButton.addEventListener("click", saveMemo);

loadMemo();