/**
 * Задача 1
 * Найти сумму элементов массива используя функцию reduce()
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * @param {Array}
 * @returns {Number}
 */
 
 const summ = [1,2,3,4]
 const reducer = (accumulator, currentValue) => accumulator = currentValue;

console.log(summ.reduce(reducer))

/**
* Задача 2
* Дана строка с дефисом. Написать функцию которая возвращает строку в формате camelCase
* Пример: fn2("background-color") ---> 'backgroundColor';
* @param {String}
* @returns {String}
*/
var test = 'It-is-a-bad-day-yesterday';

function camelize(str) {
  return str[0].toLowerCase() + str.replace(/-([a-z])/g, function(a, b) {
      return b.toUpperCase();
  }).slice(1);
}

console.log(camelize(test));

/**
* Задача 3
* Дан массив строк. Написать функцию которая возвращает новый массив строк,
* где каждый элемент с четным индексом будет преобразован в верхний регистр (arr[2], arr[4], arr[6] ...)
* Используйте функцию map()
* Пример: fn3(['a', 'b', 'c', 'd']) ---> ['a', 'B', 'c', 'D'];
* @param {Array}
* @returns {Array}
*/
// arr.map((s, i) => i % 2 ? s.toUpperCase() : s))
// console.log(arr)
const fn3 = (arr) => {
let newArr = arr.map((s, i) => i % 2 ? s.toUpperCase() : s);
return newArr
}
console.log(fn3(['a','b', 'c', 'd']))

/**
* Задача 4
* Дано число. Вернуть массив случайных целых чисел, где кол-во элементов массива будет равно переданному числу (кол-ву итерирования)
* Пример: fn4(5) -> [10, 12, 54, 3, 2]
* Подсказка создать функцию с числом который возвращет массив с заданным количеством ячеек с рандомными числами
* @param {Number}
* @returns {Array}
*/
var arr = [];
for (var i = 0, l = 5; i < l; i++) {
 arr.push(Math.round(Math.random() * 50))
}
console.log(arr)

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
const num = [1, 2, 3, 4, 5, 6]
num.splice(2, 3, 3, '*', 4, 5)
console.log(num)

const mass = ['a', 'b', 'c', 'd', 'e', 'f'];
let n = 3;
mass.splice(n, 0, '*');
console.log(mass)

/**
* Задача 6
* Дан массив чисел и строка.
* Если строка === 'min' то вернуть наименьшее число из массива
* Если строка === 'max' то вернуть наибольшее число из массива
* Иначе вернуть null
* @param {Array}
* @returns {Array}
*/
function last(arr){
 var min = arr[0], max = arr[0];
 arr.forEach(function(val) {
   min = Math.min(min, val);
   max = Math.max(max, val);
 });
 return [min, max];

console.log(last([1,2,3,4,5]));
console.log(last([2334454,5]));
console.log(last([1]));
}


//  * Задача 7
//  * Дан двухмерный массив. Извлечь все элементы в новый массив.
//  * Попробуйте реализовать двумя способами:
//  * 1) цикл for
//  * 2) map()
//  * Пример: fn7([[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]]) ---> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  * @param {Array}

var arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
var result = [].concat(arr[0],arr[1],arr[2] );
console.log(result);