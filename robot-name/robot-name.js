// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

let used = []
const numbers = '0123456789';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


export class Robot {
    #name;
  
    constructor() {
        this.#name = this.randomName()
    }

    reset() {
        this.#name = this.randomName()
    }

    get name() {
      return this.#name
    }

    randomNum() {
        return Math.floor(Math.random() * numbers.length)
      }
    
    randomLetter() {
        return letters.charAt(Math.floor(Math.random() * letters.length))
      }
    
    newName() {
      return this.randomLetter() + this.randomLetter() + this.randomNum() + this.randomNum() + this.randomNum()
    }
    
    randomName() {
      let robotName = this.newName()
      if (used.includes(robotName)) {
        do {
          robotName = null;
          robotName = this.newName()
        } while (used.includes(robotName))
      } else {
        used.push(robotName)
        return robotName
      }
      return robotName
    }
}

Robot.releaseNames = () => {};