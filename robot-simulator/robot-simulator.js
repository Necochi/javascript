//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const sides = ['north', 'east', 'south', 'west'];
let index;

function whatTheIndex() {
  if (index === 4) {
    index = 0;
    return index;
  } if (index === -1) {
    index = 3;
    return index;
  }
  return index;
}

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }

  get error() {
    return this.message;
  }
}

export class Robot {
  constructor() {
    this.direction = 'north';
    this.x = 0;
    this.y = 0;
  }

  get bearing() {
    return this.direction;
  }

  get coordinates() {
    const arr = [];
    arr.push(this.x);
    arr.push(this.y);
    return arr;
  }

  place({ direction, x, y }) {
    if (direction === 'north' || direction === 'south' || direction === 'west' || direction === 'east') {
      this.direction = direction;
      this.x = x;
      this.y = y;
      return this.direction;
    }
    throw new InvalidInputError();
  }

  evaluate(instructions) {
    const arr = instructions.split('');
    index = sides.indexOf(this.direction);

    arr.forEach((value) => {
      whatTheIndex();

      if (value === 'A') {
        switch (index) {
          case 0:
            this.y++;
            break;

          case 1:
            this.x++;
            break;

          case 2:
            this.y--;
            break;

          case 3:
            this.x--;
            break;
        }
      } else if (value === 'R') {
        index++;
        whatTheIndex();
        this.direction = sides[index];
      } else if (value === 'L') {
        index--;
        whatTheIndex();
        this.direction = sides[index];
      }
      return this.direction;
    });
    return this.direction;
  }
}
