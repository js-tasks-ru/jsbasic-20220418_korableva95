function getMinMax(str) {
  let substr = str
  .split(',').join(' ').split(' ')
  .filter(item=> Number(item));
  let result = {
min: Math.min(...substr),
max: Math.max(...substr),
  }
  return result
}
