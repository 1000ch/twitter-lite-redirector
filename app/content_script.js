const url = new URL(location.href);
url.hostname = 'mobile.twitter.com';
location.href = url.toString();
