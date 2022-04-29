console.log(
  findAllMethods({
    n: 1,
    t: 2,
    func1() {},
    func2() {},
  }),
);

function findAllMethods(obj) {
  const result = [];
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === 'function') {
      result.push(key);
    }
  }
  return result;
}
