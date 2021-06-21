/**
 * Задача 1
 * Найти сумму элементов массива используя функцию reduce()
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * @param {Array}
 * @returns {Number}
 */
 const fn1 = (str) => {
    return str.reduce((sum, current) => sum + current, 0)
}

console.log(fn1([1, 2, 3, 4, 5]))

/**
 * Задача 2
 * Дана строка с дефисом. Написать функцию которая возвращает строку в формате camelCase
 * Пример: fn2("background-color") ---> 'backgroundColor';
 * @param {String}
 * @returns {String}
 */
 const fn2 = (str) => {
    let arr = str.split('-')
    arr[1] = (arr[1])[0].toUpperCase() + arr[1].slice(1)
    return arr.join('')
}

console.log(fn2('background-color'))

/**
 * Задача 3
 * Дан массив строк. Написать функцию которая возвращает новый массив строк,
 * где каждый элемент с четным индексом будет преобразован в верхний регистр (arr[2], arr[4], arr[6] ...)
 * Используйте функцию map()
 * Пример: fn3(['a', 'b', 'c', 'd']) ---> ['a', 'B', 'c', 'D'];
 * @param {Array}
 * @returns {Array}
 */
 const fn3 = (arr) => {
    const callBack = (el, index) => {
      if (index % 2 === 1){
        el = el.toUpperCase();
      }
      return el;
    }
    return arr.map(callBack);
  }
  
  console.log(fn3(['a','b', 'c', 'd']));

/**
 * Задача 4
 * Дано число. Вернуть массив случайных целых чисел, где кол-во элементов массива будет равно переданному числу (кол-ву итерирования)
 * Пример: fn4(5) -> [10, 12, 54, 3, 2]
 * Подсказка
 * @param {Number}
 * @returns {Array}
 */
 const fn4 = (number) => {
    let arr = []
    let min = 0
    let max = 100
    for (let i = 0; i < number; i++) {
      arr.push(Math.round((min + Math.random() * (max - min))))
    }
    return arr
  }
  
  console.log(fn4(5))

/**
 * Задача 5
 * Дан массив строк и символ. Написать функцию которая возвращает новый массив с переданным символом в середине этого массива
 * Подсказки:
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/round
 * Пример: fn5(['a', 'b', 'c', 'd'], '*') ---> ['a', 'b', '*', 'c', 'd']
 * @param {Array}
 * @param {String}
 * @returns {Array}
 */
 const fn5 = (array, string) => {
    let start = array.slice(0, array.length/2)
    let finish = array.slice(array.length/2, array.length)
    let center = [string]
    return (start.concat(center)).concat(finish)
  }
    
  console.log(fn5(['1', '2', '3', '4', '5', '6'], '*'))

/**
 * Задача 6
 * Дан массив чисел и строка.
 * Если строка === 'min' то вернуть наименьшее число из массива
 * Если строка === 'max' то вернуть наибольшее число из массива
 * Иначе вернуть null
 * @param {Array}
 * @returns {Array}
 */
 const fn6 = (arr, str) => {
    function compareNumeric (a, b) {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    }
    if (str === 'max') {
      arr.sort(compareNumeric)
      arr.reverse()
      return arr[0]
    } else if (str === 'min') {
      arr.sort(compareNumeric)
      return arr[0]
    } else {
      return null
    }
  }
  
  console.log(fn6([1, 2, 3, 4, 5, 11], 'min'))
  console.log(fn6([1, 2, 3, 4, 5, 11], 'max'))
  console.log(fn6([1, 2, 3, 4, 5, 6], 'mix'))

/**
 * Задача 7
 * Дан двухмерный массив. Извлечь все элементы в новый массив.
 * Попробуйте реализовать двумя способами:
 * 1) цикл for
 * 2) map()
 * Пример: fn7([[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]]) ---> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * @param {Array}
 * @returns {Array}
 */
 const fn7 = (arr) => {
    let result = []
    for (let i = 0; i < arr.length - 1; i++) {
      result = arr[0].concat(arr[i].concat(arr[i + 1]))
    }
    return result
  }
  
  console.log(fn7([[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]]))
  
  
  
  const fn7 = (array) => {
    let newArr = [];
    let callBack = (arrEl) => {
      if (arrEl instanceof Array){
        for (let el of arrEl){
          newArr.push(el);
        }
      }
    }
    array.map(callBack);
    return newArr;
  }
  
  console.log(fn7([[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]]));
