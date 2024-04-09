//
// This is only a SKELETON file for the 'Knapsack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const knapsack = (maxWeight, items) => {
  let arr = [];
  const arr2 = [];
  const wei = [];
  const val = [];

  items.forEach((value) => {
    wei.push(value.weight);
    val.push(value.value);
  });

  for (let index = 0; index < items.length + 1; index += 1) {
    for (let count = 0; count < maxWeight; count += 1) {
      arr.push(0);
    }
    arr2.push(arr);
    arr = [];
  }

  for (let index = 0; index < items.length + 1; index += 1) {
    for (let count = 0; count < maxWeight + 1; count += 1) {
      if (index === 0) {
        arr2[index][count] = 0;
      } else if (count < wei[index - 1]) {
        arr2[index][count] = arr2[index - 1][count];
      } else if (count >= wei[index - 1]) {
        arr2[index][count] = Math.max((arr2[index - 1][count]), (arr2[index - 1][count - wei[index - 1]] + val[index - 1]));
      }
    }
  }

  return arr2[items.length][maxWeight];
};
