// 2

function GeeksForGeeks() {
  var copyGfGText = document.getElementById("GfGInput");
  copyGfGText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyGfGText.value);
}
