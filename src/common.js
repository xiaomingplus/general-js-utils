export function isObject(obj) {
  const type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
}
export function isObjectEmpty(value) {
  return isObject(value) && !Object.keys(value).length;
};
export function uniqueArray(arr) {
  const res = [];
  const json = {};
  for (let i = 0; i < arr.length; i++) {
    if (!json[arr[i]]) {
      res.push(arr[i]);
      json[arr[i]] = 1;
    }
  }
  return res;
}
export function random(min = 0, max = 9) {
  return Math.floor(Math.random() * (max - min) + 1);
}
export function randomNumber(len = 4) {
  const _len = parseInt(len);
  let result = "";
  for (let i = 0; i < _len; i++) {
    result += "" + random(0, 9)
  }
  return parseInt(result);
}
