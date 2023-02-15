export function randInt(low, high) {
  var rndDec = Math.random();
  return Math.floor(rndDec * (high - low + 1) + low);
}
