//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (nums) => {
  const arr = [];
  const doubledArr = [];
  let result = 0;
  let validation = null;
  const trash = [];

  nums.split('').forEach((value) => {
    if (value !== ' ') {
      if (/\d/.test(value)) {
        arr.push(value);
      } else {
        trash.push(value);
      }
    }
  });

  function double(a) {
    if (a * 2 > 9) {
      return String(a * 2 - 9);
    }
    return String(a * 2);
  }

  function isValid() {
    doubledArr.reverse().forEach((value) => {
      result += Number(value);
    });

    if (result % 10 === 0) {
      validation = true;
    } else {
      validation = false;
    }

    return validation;
  }

  arr.reverse().forEach((value, index) => {
    if (index % 2 !== 0) {
      doubledArr.push(double(value));
    } else {
      doubledArr.push(value);
    }
  });

  isValid();

  if (nums.split('').length === 1) {
    validation = false;
  } else if (result === 0) {
    if (arr.length > 2) {
      validation = true;
    } else {
      validation = false;
    }
  } else if (trash.length > 0) {
    validation = false;
  }

  return validation;
};
