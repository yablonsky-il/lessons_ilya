/**
 * Задача 1
 * Внутри функции дан объект. Нобходимо деструктуризировать все ключи объекта
 * и его вложенных объектов и вернуть массив этих значений.
 * @returns {Array}
 */
 const fn1 = () => {
  const obj = {
    x: 1,
    y: 2,
    z: 3,
    obj1: {
      x: 4,
      y: 5,
      z: 6,
      obj2: {
        x: 7,
        y: 8,
        z: 9
      }
    }
  };
  const {x, y, z, obj1: {x: x1, y: y1, z: z1, obj2: {x: x2, y: y2, z: z2}}} = obj
  return [x, y, z, x1, y1, z1, x2, y2, z2]
};
console.log(fn1())

/**
 * Задача 2
 * Написать рекурсивную функцию, которая вычеслит сумму чисел 1 + 2 + ... + n
 * @param {Number} n
 * @returns {Number}
 * @example sum(4) = 4 + 3 + 2 + 1 = 10
 */
 const sum = (n) => (n === 1) ? 1 : n + sum(n - 1)
 console.log(sum(6))

/**
 * Задача 3
 * Написать функцию, которая прнимает:
 * первым параметром массив ключей
 * вторым параметром объект
 * и возвращает массив значений из данного объекта.
 * Если в объекте нет такого ключа - вернуть undefined
 * @example props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 * @param {Array}
 * @param {Object}
 * @returns {Array}
 */
 const props = (arr, obj) => arr.map(key => obj[key])

 console.log(props(['c', 'a', 'b'], {b: 2, a: 1}))

/**
 * Задача 4
 * Дан массив повторяющихся чисел.
 * Написать функцию которая вернет массив уникальный чисел (избавится от повторяющихся значений)
 * @param {Array}
 * @returns {Array}
 * @example dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4]
 */
 const dropRepeats = (arr) => arr.filter((el,idx) => arr.indexOf(el) === idx)
 console.log(dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]))

/**
 * Задача 5
 * Дан массив объектов:
  const users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
  Как выглядит фнукция сортировки по возрасту - users.sort((a, b) => a.age > b.age ? 1 : -1);
  * Необходимо написать функцию которая принимает строку (ключ объекта) по которому нужно сортировать массив
  * @example users.sort(byField('age'));
 */
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];
  const byField = (field) => {
    return (a, b) => a[field] > b [field] ? 1 : -1
  };
  users.sort(byField('age'))
  console.log(users)
