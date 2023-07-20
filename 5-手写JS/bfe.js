// 柯里化函数
function curry(fn) {
  // your code here
  // 当参数是
  let args = [];
  const res = function () {
    args.push(...arguments);
    // 判断参数 长度
    if (args.length >= 3) {
      let _r = fn(...args);
      args = [];
      return _r;
    }
    return res;
  };
  return res;
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3)); // '1_2_3'

console.log(curriedJoin(1)(2, 4)); // '1_2_3'

console.log(curriedJoin(1)(0)(2)); // '1_2_3'
