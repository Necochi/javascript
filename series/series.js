//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if (series === '') {
      throw new Error('series cannot be empty');
    } else {
      this.series = series.split('').map(Number);
    }
  }

  slices(sliceLength) {
    let length = sliceLength;
    const newArr = [];
    const index = this.series.length - length;
    if (length > this.series.length) {
      throw new Error('slice length cannot be greater than series length');
    } else if (length === 0) {
      throw new Error('slice length cannot be zero');
    } else if (length < 0) {
      throw new Error('slice length cannot be negative');
    } else if (length <= this.series.length) {
      this.series.forEach((value, i) => {
        if (i <= index) {
          newArr.push(this.series.slice(i, length));
          length += 1;
        }
      });
    }
    return newArr;
  }
}
