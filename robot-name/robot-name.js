// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

let used = []
const numbers = '0123456789';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


export class Robot {
    #name;
  
    constructor() {
        this.#name = newName()
    }

    reset() {
        this.#name = randomName()
    }

    get name() {
      return this.#name
    }

}

function randomNum(){
        return Math.floor(Math.random() * numbers.length)
      }
    
   function randomLetter(){
        return letters.charAt(Math.floor(Math.random() * letters.length))
      }
    
   function newName(){
      let result = randomLetter() + randomLetter() + randomNum() + randomNum() + randomNum()
      return result
    }
    
  function randomName(){
      let robotName = newName()
      if (used.includes(robotName)) {
        do {
          robotName = newName()
        } while (used.includes(robotName))
      } else {
        used.push(robotName)
        return robotName
      }
      return robotName
    }


Robot.releaseNames = () => {};
