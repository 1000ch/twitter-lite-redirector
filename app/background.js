function setData(key, value) {
  return new Promise(resolve => {
    chrome.storage.sync.set({
      [key]: value
    }, resolve);
  });
}

function getData(key) {
  return new Promise(resolve => {
    chrome.storage.sync.get([key], item => {
      resolve(item[key]);
    });
  });
}

const key = 'is-enabled';

function updateText(isEnabled) {
  chrome.browserAction.setBadgeText({
    text: isEnabled ? 'on' : 'off'
  });
}

async function main() {
  const isEnabled = await getData(key);

  if (isEnabled === null || isEnabled === undefined) {
    await setData(key, true);
    updateText(true);
  } else {
    updateText(isEnabled);
  }

  chrome.browserAction.onClicked.addListener(async () => {
    const isEnabled = !(await getData(key));

    await setData(key, isEnabled);
    updateText(isEnabled);
  });
}

main();
