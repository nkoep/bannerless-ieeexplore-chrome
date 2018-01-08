var iframes = document.getElementsByTagName("iframe");

if (iframes.length > 0) {
  var url = iframes[iframes.length - 1].src;
  document.location = url.split(/[?#]/)[0];
}
