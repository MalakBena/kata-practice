function countBy(x, n) {
  let multiples = [];
  for (let i = 1; i <= n; i++) {
    multiples.push(x * i);
  }
  return multiples;
}

module.exports = countBy;
