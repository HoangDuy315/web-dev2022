// file system module to perform file operations
const fs = require("fs");

// json data
var jsonData =
  '{"persons":[{"name":"Duy","city":"HCM city"},{"name":"DUy1","city":"HCM city"}]}';

// parse json
var jsonObj = JSON.parse(jsonData);
console.log(jsonObj);

// stringify JSON Object
var jsonContent = JSON.stringify(jsonObj);
console.log(jsonContent);

fs.writeFile("output.json", jsonContent, "utf8", function (err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
  }

  console.log("JSON file has been saved.");
});
