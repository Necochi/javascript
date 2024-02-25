//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
  const number = num.toString(2).split('');
  const moves = ['wink', 'double blink', 'close your eyes', 'jump'];
  let bigNum;
  const arr = [];

  const bigNumIs = () => {
    bigNum = Math.abs(31 - num - 15);
    return bigNum;
  };

  for (let i = number.length; number.length < 5; i += 1) {
    number.unshift('0');
  }

  const whatTheMove = () => {
    number.forEach((value, index) => {
      if (value === '1') {
        if (index === 4) {
          arr.push(moves[0]);
        } else if (index === 3) {
          arr.push(moves[1]);
        } else if (index === 2) {
          arr.push(moves[2]);
        } else if (index === 1) {
          arr.push(moves[3]);
        }
      }
    });

    return arr;
  };

  if (num === 0 || num === 16) {
    return arr;
  } if (num > 16) {
    bigNumIs();
    whatTheMove();
    return arr;
  } if (num <= 15) {
    bigNum = num;
    whatTheMove();
    return arr.reverse();
  }
  return arr;
};
