const isValidJSON = (obj) => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};
console.log(isValidJSON(null));
console.log(isValidJSON('{"name":"Duy","age":21}'));
console.log(isValidJSON('{"name":"GnahYuD",age:"21"}'));
