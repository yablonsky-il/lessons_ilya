const fn6 = (mas, str) => {
    function compareNumeric (a, b) {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    }
    if (str === 'max') {
      mas.sort(compareNumeric)
      mas.reverse()
      return mas[0]
    } else if (str === 'min') {
      mas.sort(compareNumeric)
      return mas[0]
    } else {
      return null
    }
  }
  
  console.log(fn6([1, 2, 3, 4, 5, 11], 'min'))
  console.log(fn6([1, 2, 3, 4, 5, 11], 'max'))
  console.log(fn6([1, 2, 3, 4, 5, 6], 'mix'))