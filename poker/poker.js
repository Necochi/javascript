//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const bestHands = (hands) => {
  let result = [];
  const points = [];
  let pairs = [];
  let alternate = 0;
  const handsArr = [];
  let marks = '';
  let sorting = [];

  hands.forEach((value) => {
    let string = '';
    value.split(' ').forEach((val) => {
      if (val[0] === 'J') {
        string += `11${val[val.length - 1]} `;
      } else if (val[0] === 'Q') {
        string += `12${val[val.length - 1]} `;
      } else if (val[0] === 'K') {
        string += `13${val[val.length - 1]} `;
      } else if (val[0] === 'A') {
        string += `14${val[val.length - 1]} `;
      } else {
        string += `${val} `;
      }
    });
    handsArr.push(string.slice(0, string.length - 1));
  });

  function whatMark(mar) {
    marks = '';
    mar.split(' ').forEach((val) => {
      if (marks.length < 1) {
        marks += val[val.length - 1];
      } else if (marks.length >= 1 && !(marks.includes(val[val.length - 1]))) {
        marks += val[val.length - 1];
      }
    });
    return marks;
  }

  function hasPair(hand) {
    for (let i = 0; i < 2; i += 1) {
      const arr = [];
      const arrow = [];
      const numsOnly = whatCard(hand);
      hand.split(' ').forEach((value) => arrow.push(value));

      hand.split(' ').forEach((value) => {
        const deleted1 = numsOnly.splice(0, 1);

        if (pairs.length === 0) {
          if (arr.length === 0 && numsOnly.includes(String(deleted1))) {
            arr.push(value);
          } else if (arr.length > 0) {
            if (arr[0].includes(String(deleted1)) && !(arr.includes(value)) && arr[0].length === value.length) {
              arr.push(value);
            } else if (arr.includes(String(deleted1)) && !(arr.includes(value)) && arr[0].length === value.length) {
              arr.push(value);
            }
          }
        } else if (pairs.length > 0) {
          if (arr.length === 0) {
            if (numsOnly.includes(String(deleted1)) && !(pairs[0][0].includes(String(deleted1)))) {
              arr.push(value);
            }
          } else if (arr.length > 0) {
            if (arr[0].includes(String(deleted1)) && !(arr.includes(value)) && arr[0].length === value.length) {
              arr.push(value);
            } else if (arr.includes(String(deleted1)) && !(arr.includes(value)) && arr[0].length === value.length) {
              arr.push(value);
            }
          }
        }
      });
      if (arr.length > 1) {
        pairs.push(arr);
      }
    }

    return pairs;
  }

  function whatCard(hand) {
    sorting = [];
    hand.split(' ').forEach((value) => {
      sorting.push(value.slice(0, value.length - 1));
    });
    return sorting;
  }

  function samePoints(arrOfPoints) {
    const obj = {};
    arrOfPoints.forEach((i) => {
      obj[i] = (obj[i] || 0) + 1;
    });
    return obj;
  }

  function theRankedHand(hand) {
    let rank = 0;
    hand.split(' ').forEach((value) => {
      rank += Number(value.slice(0, value.length - 1));
    });
    return rank;
  }

  if (hands.length < 2) {
    result = hands;
  } else {
    handsArr.forEach((value) => {
      pairs = [];
      const newPair = hasPair(value);
      whatMark(value);
      if (marks.length === 1) {
        alternate = 0;
        whatCard(value).sort((a, b) => a - b);
        sorting.forEach((val, index) => {
          if (sorting[0] === '10') {
            if (sorting[index - 1] !== undefined && Number(sorting[index - 1]) === Number(val) - 1) {
              alternate += 1;
            }
          } else if (sorting[0] === '2' && (sorting[4] === '14' || sorting[4] === '6')) {
            if (sorting[index - 1] !== undefined && Number(sorting[index - 1]) === Number(val) - 1) {
              alternate += 1;
            } else if (index === 4 && sorting[index] === '14') {
              alternate += 1;
            }
          } else if (index !== 0) {
            if (sorting[index - 1] !== undefined && Number(sorting[index - 1]) === Number(val) - 1) {
              alternate += 1;
            }
          } else if (index === 0) {
            if (sorting[index + 1] === Number(val + 1)) {
              alternate += 1;
            }
          }
        });

        if (alternate === 4 && sorting[0] === '10') {
          points.push(100);
        } else if (alternate === 4) {
          points.push(90);
        } else if (alternate !== 4) {
          points.push(60);
        }
      } else if (marks.length !== 1 && newPair.length === 0) {
        alternate = 0;
        whatCard(value).sort((a, b) => a - b);
        sorting.forEach((val, index) => {
          if (sorting[0] === '2' && (sorting[4] === '14' || sorting[4] === '6')) {
            if (sorting[index - 1] !== undefined && Number(sorting[index - 1]) === Number(val) - 1) {
              alternate += 1;
            } else if (index === 4 && sorting[index] === '14') {
              alternate += 1;
            }
          } else if (index !== 0) {
            if (sorting[index - 1] !== undefined && Number(sorting[index - 1]) === Number(val) - 1) {
              alternate += 1;
            }
          } else if (index === 0) {
            if (sorting[index + 1] === Number(val + 1)) {
              alternate += 1;
            }
          }
        });

        if (alternate === 4) {
          points.push(50);
        } else {
          points.push(10);
        }
      } else if (newPair.length === 2) {
        if (newPair[0].length === 2) {
          if (newPair[1].length === 3) {
            points.push(70);
          } else if (newPair[1].length === 2) {
            points.push(30);
          }
        } else if (newPair[0].length === 3 && newPair[1].length === 2) {
          points.push(70);
        }
      } else if (newPair.length === 1) {
        if (newPair[0].length === 4) {
          points.push(80);
        } else if (newPair[0].length === 3) {
          points.push(40);
        } else if (newPair[0].length === 2) {
          points.push(20);
        }
      }
    });
  }

  function whoIsBigger(arr) {
    let para = [];
    const biggest = [];
    let arr2 = [];
    let big = [];
    let small = [];
    const smaller = [];

    arr.forEach((value, index) => {
      pairs = [];
      if (value === 10) {
        arr2.push(Math.max(...whatCard(handsArr[index])));
      } else if (value === 20 || value === 40 || value === 80) {
        para = hasPair(handsArr[index]);

        para.forEach((val, ind) => {
          if (val[ind].length === 2) {
            arr2.push(val[ind].slice(0, 1));
          } else {
            arr2.push(val[ind].slice(0, 2));
          }
        });
      } else if (value === 30) {
        big = [];
        pairs = [];
        para = hasPair(handsArr[index]);

        para.forEach((val, ind) => {
          if (val[ind].length === 2) {
            big.push(val[ind].slice(0, 1));
          } else {
            big.push(val[ind].slice(0, 2));
          }
        });
        biggest.push(Math.max(...big));
        smaller.push(Math.min(...big));

        if (biggest.length === 2) {
          if (biggest[0] === biggest[1]) {
            arr2 = smaller;
          } else {
            arr2 = biggest;
          }
        }
      } else if (value === 90) {
        arr2 = points;
      } else if (value === 50 || value === 60) {
        sorting = [];
        whatCard(handsArr[index]).sort((a, b) => a - b);
        if (sorting[0] === '2' && sorting[4] === '6') {
          arr2.push(theRankedHand(handsArr[index]));
        } else if (sorting[0] === '2' && sorting[4] === '14') {
          arr2.push(theRankedHand(handsArr[index]) - 9);
        } else {
          arr2.push(theRankedHand(handsArr[index]));
        }
      } else if (value === 70) {
        small = [];
        big = [];
        pairs = [];
        para = hasPair(handsArr[index]);

        para.forEach((val, ind) => {
          if (val.length === 3) {
            if (val[ind].length === 2) {
              big.push(val[ind].slice(0, 1));
            } else {
              big.push(val[ind].slice(0, 2));
            }
          } else if (val.length === 2) {
            if (val[ind].length === 2) {
              small.push(val[ind].slice(0, 1));
            } else {
              small.push(val[ind].slice(0, 2));
            }
          }
        });
        biggest.push(Math.max(...big));
        smaller.push(Math.min(...small));

        if (biggest[0] === biggest[1]) {
          arr2.push(smaller);
        }
      }
    });
    return arr2;
  }

  function whoWins(point) {
    let i = 0;
    let biggest = 0;

    if (Number(Object.values(samePoints(points))) !== points.length) {
      point.forEach((value, index) => {
        if (value > biggest) {
          biggest = value;
          i = index;
        }
      });
    } else if (Number(Object.values(samePoints(points))) === points.length) {
      const arr = whoIsBigger(points);

      if (Number(Object.values(samePoints(arr))) === arr.length) {
        const rank = [];
        handsArr.forEach((value) => {
          rank.push(theRankedHand(value));
        });
        i = rank.indexOf(Math.max(...rank));
      } else if (Number(Object.values(samePoints(arr))) !== arr.length) {
        arr.forEach((value, index) => {
          if (Number(value) > biggest) {
            biggest = value;
            i = index;
          } else if (value === biggest && Math.max(...arr) === value) {
            result.push(hands[i]);
            i = index;
          }
        });
      }
    }

    return result.push(hands[i]);
  }

  if (result.length === 0) {
    whoWins(points);
  }

  return result;
};
