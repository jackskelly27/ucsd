export function convertCommaStringToObject(commaString) {

  const splitString = commaString.split(",");

  let resultObject = {};

  resultObject[splitString[0]] = splitString[1];
  console.log(resultObject);
}
