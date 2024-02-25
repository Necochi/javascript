// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

const used = [];
const numbers = '0123456789';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let robotName;

export class Robot {
  #name;

  constructor() {
    this.#name = randomName();
  }

  reset() {
    this.#name = randomName();
  }

  get name() {
    return this.#name;
  }
}

function randomNum() {
  return Math.floor(Math.random() * numbers.length);
}

function randomLetter() {
  return letters.charAt(Math.floor(Math.random() * letters.length));
}

function newName() {
  const result = randomLetter() + randomLetter() + randomNum() + randomNum() + randomNum();
  return result;
}

function isExist() {
  do {
    robotName = null;
    robotName = newName();
  } while (used.includes(robotName));
}

function randomName() {
  robotName = newName();
  if (used.includes(robotName)) {
    isExist();
  }
  used.push(robotName);
  return robotName;
}

Robot.releaseNames = () => {};
