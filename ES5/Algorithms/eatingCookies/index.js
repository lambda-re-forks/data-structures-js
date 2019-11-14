function eatingCookies(num, cache = null) {
  if (cache === null) {
    cache = new Array(num + 1).fill(0);
  }
  if (num <= 1) {
    cache[num] = 1;
    return 1;
  } else if (num === 2) {
    cache[num] = 2;
    return 2;
  } else if (num === 3) {
    cache[num] = 4;
    return 4;
  } else if (cache[num] !== 0) {
    return cache[num];
  } else {
    cache[num] =
      eatingCookies(num - 1, cache) +
      eatingCookies(num - 2, cache) +
      eatingCookies(num - 3, cache);
    return cache[num];
  }
}
module.exports = { eatingCookies };
