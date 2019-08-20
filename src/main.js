module.exports = {
  sum: (...numN) => numN.reduce((total, num) => total + num),
  sub: (...numN) => numN.reduce((total, num) => total - num),
  mult: (...numN) => numN.reduce((total, num) => total * num),
  div: (...numN) => ((numN.indexOf(0) > 0) ? 'Não é possivel divisão por zero' : numN.reduce((total, num) => total / num)),
};
