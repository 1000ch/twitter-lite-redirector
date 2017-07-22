document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#install').addEventListener('click', () => {
    chrome.webstore.install('', () => {
      console.log('installed');
    }, error => {
      console.error(error);
    });
  });
});
