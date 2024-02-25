// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.

export const encode = (string, num) => {
  const stringToArr = string.split('');
  let arr = [];
  let str = '';
  let res = [];
  let finalResult = '';

  while (arr.length !== string.length) {
    if (arr.length === 0) {
      str = stringToArr.slice(0, num).join('');
      arr.push(str);
      stringToArr.splice(0, num);
      str = '';
    } else if (arr.length > 0) {
      if (num - 1 !== undefined) {
        str = stringToArr.slice(0, num - 1).join('');
        arr.push(str);
        stringToArr.splice(0, num - 1);
        str = '';
      } else if (stringToArr.length <= num - 1) {
        str = stringToArr.slice(0, stringToArr.length).join('');
        arr.push(str);
        str = '';
      }
    }
  }

  arr.forEach((value, i) => {
    if (i % 2 === 0) {
      res.push(value);
    } else if (i % 2 !== 0) {
      res.push(value.split('').reverse().join(''));
    }
  });
  arr = [];

  res.forEach((value, i) => {
    if (i === 0) {
      arr.push(value);
    }
    if (i % 2 === 0 && i !== 0) {
      const a = value.split('');
      a.unshift(' ');
      arr.push(a.join(''));
    } else if (i % 2 !== 0) {
      const a = value.split('');
      a.push(' ');
      arr.push(a.join(''));
    }
  });
  res = [];

  for (let i = 0; i < arr[0].length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j][i] !== undefined) {
        res.push(arr[j][i]);
      } else if (arr[j][i] === undefined) {
        res.push(' ');
      }
    }
  }

  res.forEach((value) => {
    if (value !== ' ') {
      finalResult += value;
    }
  });
  return finalResult;
};

export const decode = (string, num) => {
  let str = '';
  let index = 0;
  const fieldArr = [];

  for (let i = 0; i < num; i += 1) {
    fieldArr.push(new Array(string.length).fill(' '));
  }

  function up() {
    for (let downer = fieldArr.length - 1; downer >= 0; downer -= 1) {
      if (fieldArr[downer][index] !== undefined) {
        if (downer === 0) {
          down();
        } else {
          fieldArr[downer][index] = '0';
          index += 1;
        }
      }
    }
  }

  function down() {
    for (let jumper = 0; jumper < fieldArr.length; jumper += 1) {
      if (fieldArr[jumper][index] !== undefined) {
        if (jumper === fieldArr.length - 1) {
          up();
        } else {
          fieldArr[jumper][index] = '0';
          index += 1;
        }
      }
    }
  }

  down();
  index = 0;

  for (let j = 0; j < fieldArr.length; j += 1) {
    for (let i = 0; i < string.length; i += 1) {
      if (fieldArr[j][i] === '0') {
        fieldArr[j][i] = string[index];
        index += 1;
      }
    }
  }

  index = 0;

  function up2() {
    for (let downer = fieldArr.length - 1; downer >= 0; downer -= 1) {
      if (fieldArr[downer][index] !== undefined) {
        if (downer === 0) {
          down2();
        } else {
          str += fieldArr[downer][index];
          index += 1;
        }
      }
    }
  }
  function down2() {
    for (let jumper = 0; jumper < fieldArr.length; jumper += 1) {
      if (fieldArr[jumper][index] !== undefined) {
        if (jumper === fieldArr.length - 1) {
          up2();
        } else {
          str += fieldArr[jumper][index];
          index += 1;
        }
      }
    }
  }

  down2();

  return str;
};
