var arr = document.cookie.split("; ");
var bool = false;

window.onload = function () {
  if (arr.length != 0) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].indexOf("check=") != -1) {
        bool = true;
        break;
      } else {
        bool = false;
      }
    }
  }
  if (bool == false) {
    window.open(
      "popup.html",
      "pop",
      "width=300px, height=400px, left=300px, top=300px"
    );
  } else {
  }
};
