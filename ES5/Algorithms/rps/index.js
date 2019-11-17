function rps(n) {
  const results = [];
  let plays = [["rock"], ["paper"], ["scissors"]];
  if (n === 0) {
    return [[]];
  } else if (n === 1) {
    return plays;
  } else {
    for (let i of rps(n - 1)) {
      for (let j of plays) {
        results.push(i.concat(j));
      }
    }
  }
  return results;
}
module.exports = { rps };

// console.log(rps(3));
