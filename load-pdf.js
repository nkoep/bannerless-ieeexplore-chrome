var iframes = document.getElementsByTagName("iframe");

if (iframes.length > 0) {
  document.location = iframes[iframes.length - 1].src;
}
