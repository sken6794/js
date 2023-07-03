function addCookie(name, value) {
  var date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  //console.log(date);

  var cookie = "";
  cookie += name + "=" + value + "; ";
  cookie += "expires=" + date.toUTCString() + "; path=/";

  document.cookie = cookie;
}

function getCookies(name) {
  var arr = document.cookie.split("; ");

  if (arr.length != 0) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(name + "=") != -1) {
        return true; //쿠키 있음
      }
    }
  }
}
