//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (string1, string2) => {

    let sum = 0;

    if (string1.length != string2.length) {
      throw new Error('strands must be of equal length'); 

  } else if (string1.length === string2.length) {
      for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) {
          sum += 1
        }
      }
      return sum;
  }
};
