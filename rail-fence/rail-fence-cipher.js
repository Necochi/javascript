
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.


export const encode = (string, num) => {
    const stringToArr = string.split('')
    let arr = []
    let str = ''
    let res = []
    let finalResult = ''

  while (arr.length !== string.length) {

    if (arr.length === 0) {
      str = stringToArr.slice(0, num).join('')
      arr.push(str)
      stringToArr.splice(0, num)
      str = ''
      
    } else if (arr.length > 0){
      if (num - 1 !== undefined) {
        str = stringToArr.slice(0, num - 1).join('')
        arr.push(str)
        stringToArr.splice(0, num - 1)
        str = ''
        
      } else if (stringToArr.length <= num - 1) {
        str = stringToArr.slice(0, stringToArr.length).join('')
        arr.push(str)
        str = ''
      }
    }
  }

  arr.forEach((value, i) => {
    if (i % 2 === 0) {
      res.push(value)
    }
      else if (i % 2 !== 0) {
        res.push(value.split('').reverse().join(''))
      }
  })
  arr = []

  res.forEach((value, i) => {
    if (i === 0) {
      arr.push(value)
    }
    if (i % 2 === 0 && i !== 0) {
      let a = value.split('')
      a.unshift(' ')
      arr.push(a.join(''))
    }
      else if (i % 2 !== 0) {
        let a = value.split('')
        a.push(' ')
        arr.push(a.join(''))
      }
  })
  res = []

    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j][i] !== undefined) {
          res.push(arr[j][i])
        } else if (arr[j][i] === undefined) {
          res.push(' ')
        }
      }
    }
    
    res.forEach((value) => {
      if (value !== ' ') {
        finalResult += value
      }
    })
  return finalResult
}

export const decode = (string, num) => {
  let str = ''
  let index = 0
  const fieldArr = []


  for (let i = 0; i < num; i++) {
    fieldArr.push(new Array(string.length).fill(' '))
  }


  let down = function() {
    for (let jumper = 0; jumper < fieldArr.length; jumper++) {
      if (jumper === fieldArr.length - 1) {
        up()
      } else if (fieldArr[jumper][index] === undefined) {
        break

      } else {
        fieldArr[jumper][index] = '0'
        index++
      }
    }
  }

  let up = function() {
    for (let downer = fieldArr.length - 1; downer >= 0; downer--) {
      if (downer === 0) {
        down()

      } else if (fieldArr[downer][index] === undefined) {
        break

      } else {
        fieldArr[downer][index] = '0'
        index++
      }
    }
  }

down()
index = 0

for (let j = 0; j < fieldArr.length; j++) {

    for (let i = 0; i < string.length; i++) {
      if (fieldArr[j][i] === '0') {

      fieldArr[j][i] = string[index]
      index++
      }
  }
}

index = 0

let down2 = function() {
  for (let jumper = 0; jumper < fieldArr.length; jumper++) {
    if (jumper === fieldArr.length - 1) {
      up2()
    } else if (fieldArr[jumper][index] === undefined) {
      break

    } else {
      str += fieldArr[jumper][index]
      index++
    }
  }
}

let up2 = function() {
  for (let downer = fieldArr.length - 1; downer >= 0; downer--) {
    if (downer === 0) {
      down2()

    } else if (fieldArr[downer][index] === undefined) {
      break

    } else {
      str += fieldArr[downer][index]
      index++
    }
  }
}

down2()

  return str
}