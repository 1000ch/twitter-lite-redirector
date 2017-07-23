chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.getAllInWindow(undefined, tabs => {
    for (const tab of tabs) {
      if (!tab.url) {
        continue;
      }

      if (!tab.url.includes('https://mobile.twitter.com')) {
        continue;
      }

      chrome.tabs.update(tab.id, {
        active: true
      });
      return;
    }

    chrome.tabs.create({
      url: 'https://mobile.twitter.com',
      active: true
    });
  });
});
