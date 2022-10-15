// cau 2

function cau2() {
  alert("Copy success fully!");
}

// cau 3
const parseCookie = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

// cookie in browser: `pkg=math; equation=E%3Dmc%5E2`
parseCookie(document.cookie);
//console: { pkg: 'math', equation: 'E=mc^2' }

// cau4
const isValidJSON = (obj) => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};
console.log(isValidJSON('{"name":"Adam","age":20}'));
console.log(isValidJSON('{"name":"Adam",age:"20"}'));
console.log(isValidJSON(null));
