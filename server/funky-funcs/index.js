const intersection = (arr1, arr2) => {
  const map = {};
  arr1.forEach((a) => {
    map[a] = map[a] ? map[a] + 1 : 1;
  });
  const result = [];
  for (let key of arr2) {
    if (key in map && map[key] > 0) {
      result.push(key);
      map[key]--;
    }
  }
  return result;
};

const flattenDeep = (arr) => {
  return arr.flat(Infinity);
};

const flipArguments = (func) => {
  return function (...args) {
    return func(...args.reverse());
  };
};

const invert = (obj) => {
  let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
};

const camelCase = (str) => {
  let s = str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");

  let string = s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
  return (newStr = string.replace(/_/g, ""));
};

module.exports = {
  intersection,
  flattenDeep,
  flipArguments,
  invert,
  camelCase,
};
