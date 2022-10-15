// 2

function cau2() {
  var cp2 = document.getElementById("testcau2");
  cp2.select();
  document.execCommand("copy");
  alert("Copied the text: " + cp2.value);
}
