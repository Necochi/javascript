//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if (series === '') {
      throw new Error('series cannot be empty')
    } else {
    this.series = series.split('').map(Number);
    }
  }

  slices(sliceLength) {
    let newArr = [];
    const index = this.series.length - sliceLength
  if (sliceLength > this.series.length) {
    throw new Error('slice length cannot be greater than series length')

  } else if (sliceLength === 0) {
    throw new Error('slice length cannot be zero')

  } else if (sliceLength < 0) {
    throw new Error('slice length cannot be negative')
  }
    else if (sliceLength <= this.series.length) {
      this.series.forEach((i, value) => {
        if (value <= index) {
        newArr.push(this.series.slice(value, sliceLength))
        sliceLength++
      } 
    })
    return newArr
    }
  }
}