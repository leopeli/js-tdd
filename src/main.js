const sum = (...numN) => numN.reduce((total, num) => total + num);
const sub = (...numN) => numN.reduce((total, num) => total - num);
const mult = (...numN) => numN.reduce((total, num) => total * num);
const div = (...numN) => ((numN.indexOf(0) > 0) ? 'Não é possivel divisão por zero' : numN.reduce((total, num) => total / num));

export {
  sum,
  sub,
  mult,
  div,
};
