/**
 * Задача 1
 * Дан объект. Написать функцию, которая вернет сумму всех чисел в данном объекте.
 * Входной объект - { x: 23, y: 17, n: true, k: 'string', a: [] }
 * Заметка - проверить тип объекта можно инструкцией "typeof"
 * @param {Object}
 * @returns {Number}
 */
 const obj = { x: 23, y: 17, n: true, k: 'string', a: [] }
 const getSum = (obj) => {
   let sum = 0
   for (let key in obj) {
     if (typeof obj[key] === 'number') {
       sum += obj[key]
     }
   }
   return sum
 };
 
 console.log(getSum(obj))

/**
 * Задача 2
 * Дан объект. Написать функцию isEmpty которая вернет true если объект пуст
 * или false если в объекте есть хотя бы один ключ-значение
 * @param {Object}
 * @returns {Boolean}
 */
 const isEmpty = (obj) => {
  return Object.keys(obj).length === 0 
};

console.log(isEmpty({ x: 23, y: 17, n: true, k: 'string', a: [] }))

/**
 * Задача 3
 * Реализовать две функции:
 * increase() - увеличивает значение counter на еденицу
 * decrease() - уменьшает значение counter на еденицу
 */
 const obj = {
  counter: 0,
  increase() { 
    this.counter += 1
  },
  decrease() {
    this.counter -= 1
  },
};


/**
 * Задача 4
 * Дан объект и строка (ключ). Написать функцию, которая вернет массив всех значений объекта по заданному ключу
 * Пример:
 * pluck([{ 'name': 'barney', 'age': 36 }, { 'name': 'fred', 'age': 40 }], 'age'); ---> [36, 40]
 * @param {Object}
 * @returns {Array}
 */
 const pluck = (arr, str) => {
  return arr.filter(item => item[str]).map(item => item[str]);
}

console.log(pluck([{ name: 'barney', age: 36 }, { name: 'fred', age: 40 }], 'age'))

/**
 * Задача 5
 * Дано 2 объекта. Написать функцию которая вернет true если объекты равны по содержимому или 
 * false если не равны. Равны по содержимому значит у обоих объектов ключи и значение равны друг другу.
 * 
 * @param {Object}
 * @param {Object}
 * @returns {Boolean}
 */
const compare = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

console.log(compare({name: 'John'},{name: 'John'}))