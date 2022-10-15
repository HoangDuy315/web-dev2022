const isValidJSON = (obj) => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};
console.log(isValidJSON('{"name":"Duy","age":20}'));
console.log(isValidJSON(null));
console.log(isValidJSON('{"name":"GnahYuD",age:"20"}'));
