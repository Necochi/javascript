//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const chain = (dominoes) => {
  const domino = [];
  let result = [];

  dominoes.forEach((value) => {
    domino.push(value);
  });

  function chainOfDomino() {
    domino.forEach((value, index) => {
      if (result.length === 0) {
        result.push(value);
        domino.shift();
      } else if (result.length > 0) {
        if (result[result.length - 1][1] === value[0]) {
          result.push(value);
          domino.splice(index, 1);
        } else if (result[result.length - 1][1] === value[1]) {
          result.push(value.reverse());
          domino.splice(index, 1);
        }
      }
    });
  }

  for (let i = result.length; i < dominoes.length; i += 1) {
    chainOfDomino();
  }

  if (result.length < dominoes.length) {
    result = null;
  } else if (dominoes.length === 1 && dominoes[0][0] !== dominoes[0][1]) {
    result = null;
  }

  return result;
};
