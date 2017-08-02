const key = 'is-enabled';

chrome.storage.sync.get([key], item => {
  if (!item[key]) {
    return;
  }

  const url = new URL(location.href);
  url.hostname = 'mobile.twitter.com';
  location.href = url.toString();
});
