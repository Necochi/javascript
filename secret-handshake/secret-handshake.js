//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
  const arrOfNums = ['0', '00001', '00010', '00011', '00100', '00101', '00110', '00111', '01000', '01001', '01010', '01011', '01100', '01101', '01110', '01111'];
  const moves = ['wink', 'double blink', 'close your eyes', 'jump'];
  let stringOfIndex;
  let bigNum;
  const arr = [];

  const bigNumIs = () => {
    bigNum = Math.abs(31 - num - 15);
    return bigNum;
  };

  const whatTheMove = () => {
    stringOfIndex = (arrOfNums[bigNum]).split('');
    stringOfIndex.forEach((value, index) => {
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
