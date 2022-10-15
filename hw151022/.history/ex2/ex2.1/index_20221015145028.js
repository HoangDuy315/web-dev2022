var Dform = document.getElementById("form");
var username = document.getElementById("username").value;

var password = document.getElementById("password").value;
var Dform = document.getElementById("form");
// Event listener that listens for submit event
Dform.addEventListener("submit", function (e) {
  e.preventDefault();
  // retrieve values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // validate username and password fields
  if (username == "" || password == "") {
    alert("Please Fill all required fields");
  } else {
    alert("Form submission successful");
  }
});
