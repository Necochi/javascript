//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (arr) => {
  const result = [];
  let chars = '';

  function theLongestLine() {
    let maxLine = '';
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].length > maxLine.length) {
        maxLine = arr[i];
      }
    }
    return maxLine.length;
  }

  if (arr.length === 0) {
    return result;
  } if (arr[1] === undefined) {
    arr.forEach((value) => {
      for (let i = 0; i < arr[0].length; i += 1) {
        result.push(value.slice(i, i + 1));
      }
    });
  } else if (arr.length > 1 && arr[1] !== undefined) {
    for (let i = 0; i < theLongestLine(); i += 1) {
      for (let j = 0; j < arr.length; j += 1) {
        if (arr[j][i] === undefined) {
          chars += ' ';
        } else {
          chars += arr[j][i];
        }
      }
      result.push(chars);
      chars = '';
    }
    for (let i = result[0].length - 1; i >= 0; i -= 1) {
      for (let j = result.length - 1; j >= 0; j -= 1) {
        const lastChar = result[j].slice(result[j].length - 1, result[j].length);
        if (result[j][i] === ' ' && (lastChar !== ' ' && lastChar !== undefined)) {
          break;
        } else if (result[j][i] === ' ') {
          result[j] = result[j].slice(0, i);
        } else if (result[j][i] !== ' ') {
          break;
        }
      }
    }
  }
  return result;
};
