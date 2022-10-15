// 2

function cau2() {
  var copycau2 = document.getElementById("GfGInput");
  copycau2.select();
  document.execCommand("copy");
  alert("Copied cau2 successfully!: " + copycau2.value);
}
