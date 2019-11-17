function recipeBatches(recipe, ingredients) {
  let batches = 0;
  let recipeKeys = Object.keys(recipe);
  while (true) {
    for (let ingredient of recipeKeys) {
      if (!ingredients[ingredient]) {
        return batches;
      } else {
        if (ingredients[ingredient] - recipe[ingredient] < 0) {
          return batches;
        }
        ingredients[ingredient] -= recipe[ingredient];
      }
    }
    batches++;
  }
}

// function recipeBatchesRecursive(recipe, ingredients, batches = 0) {
//   let recipeKeys = Object.keys(recipe);
//   for (let ingredient of recipeKeys) {
//     if (!ingredients[ingredient]) {
//       return batches;
//     } else {
//       if (ingredients[ingredient] - recipe[ingredient] < 0) {
//         return batches;
//       }
//       ingredients[ingredient] -= recipe[ingredient];
//     }
//   }
//   batches++;
//   return recipeBatchesRecursive(recipe, ingredients, batches);
// }

function recipeBatchesRecursive(recipe, ingredients) {
  let batches = 0;
  let recipeKeys = Object.keys(recipe);
  for (let ingredient of recipeKeys) {
    if (!ingredients[ingredient]) {
      return batches;
    } else {
      ingredients[ingredient] -= recipe[ingredient];
      if (ingredients[ingredient] < 0) {
        return batches;
      } else {
        batches += recipeBatchesRecursive(recipe, ingredients);
      }
    }
  }
  batches += 1;
  return batches;
}
module.exports = {
  recipeBatches,
  recipeBatchesRecursive
};

// console.log(
//   recipeBatchesRecursive(
//     { milk: 100, flour: 4, sugar: 10, butter: 5 },
//     { milk: 1288, flour: 9, sugar: 95 }
//   )
// );
// console.log(
//   recipeBatchesRecursive(
//     { milk: 100, butter: 50, cheese: 10 },
//     { milk: 198, butter: 52, cheese: 10 }
//   )
// );
