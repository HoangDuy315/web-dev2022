// 2

function cau2() {
  var cp2 = document.getElementById("GfGInput");
  cp2.select();
  document.execCommand("copy");
  alert("Copied the text: " + cp2.value);
}
