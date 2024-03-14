//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const arr = [1, 2, 4, 8, 16, 32, 64, 128];
const arrProducts = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];

export class Allergies {
  constructor(number) {
    let classNumber = number;
    while (classNumber > 256) {
      classNumber -= 256;
    }

    this.number = classNumber;
    this.result = [];
    this.boolean = null;
  }

  list() {
    if (arr.includes(this.number)) {
      const index = arr.indexOf(this.number);
      this.result.push(arrProducts[index]);
    } else {
      const firstNumber = this.number;
      const newArr = [];
      arr.forEach((value) => {
        newArr.push(value);
      });

      newArr.push(this.number);
      const sorted = newArr.sort((a, b) => a - b);
      sorted.reverse().forEach((value) => {
        if (value >= this.number) {
          sorted.shift();
        }
      });

      sorted.forEach((value) => {
        if (this.number > value) {
          if (this.number !== 0) {
            this.number -= value;
            this.result.push(arrProducts[arr.indexOf(value)]);
          }
        } else if (this.number === value && this.number !== firstNumber) {
          this.number -= value;
          this.result.push(arrProducts[arr.indexOf(value)]);
        }
      });
    }
    return this.result.reverse();
  }

  allergicTo(product) {
    this.list();

    if (this.result.includes(product)) {
      this.boolean = true;
    } else {
      this.boolean = false;
    }
    return this.boolean;
  }
}
