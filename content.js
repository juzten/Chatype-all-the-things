var styleNode = document.createElement ("style");
styleNode.type = "text/css";
styleNode.textContent = "@font-face { font-family: Chatype-webfont; src: url('"
    + chrome.extension.getURL ("font/chatype-regular.woff")
    + "'); }"
;
document.head.appendChild (styleNode);

var allContentTags = document.querySelectorAll('*');
if(allContentTags.length !== 0) {
  for(var i=0; i<allContentTags.length; i++) {
    allContentTags[i].style.fontFamily = 'Chatype-webfont';
  }//end for
}//end if
