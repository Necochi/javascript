//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (string1, string2) => {

  const arr1 = string1.split('');
  const arr2 = string2.split('');
  let sum = 0;

  if (arr1.length !== arr2.length) {
    throw new Error('strands must be of equal length')
  
  } else if (arr1.length === arr2.length) {
      arr1.forEach((char, i) => {
        if ( arr1[i] !== arr2[i] ) {
          sum += 1
        }
      }) 
    }
    return sum;
}