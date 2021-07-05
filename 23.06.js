/**
 * Задача 1
 * Дан объект. Написать функцию, которая вернет сумму всех чисел в данном объекте.
 * Входной объект - { x: 23, y: 17, n: true, k: 'string', a: [] }
 * Заметка - проверить тип объекта можно инструкцией "typeof"
 * @param {Object}
 * @returns {Number}
 */
 const getSum = { x: 23, y: 17, n: true, k: 'string', a: [] };

function sum(getSum) {
  let sum = 0;
  for (let summary of Object.values(getSum)) {
    sum += summary;
  }

  return sum;
dad

 console.log(sum(getSum));

/**
 * Задача 2
 * Дан объект. Написать функцию isEmpty которая вернет true если объект пуст
 * или false если в объекте есть хотя бы один ключ-значение
 * @param {Object}
 * @returns {Boolean}
 */
 const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }
  
  console.log(isEmpty({ x: 23, y: 17, n: true, k: 'string', a: [] }))
  console.log(isEmpty({}))

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
  obj.increase()
  // obj.secrease()
  console.log(obj.counter)

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }

/**
 * Задача 4
 * Дан объект и строка (ключ). Написать функцию, которая вернет массив всех значений объекта по заданному ключу
 * Пример:
 * pluck([{ 'name': 'barney', 'age': 36 }, { 'name': 'fred', 'age': 40 }], 'age'); ---> [36, 40]
 * @param {Object}
 * @returns {Array}
 */
 const dich = (arr, str) =>  arr.filter(it => it[str]).map(it => it[str]);

console.log(dich([{ name: 'barney', age: 36 }, { name: 'fred', age: 40 }], 'age'))

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
    for(var p in obj1){
        if(obj1.hasOwnProperty(p)){
            if(obj1[p] !== obj2[p]){
                return false;
            }
        }
    }
    for(var p in obj2){
        if(obj2.hasOwnProperty(p)){
            if(obj1[p] !== obj2[p]){
                return false;
            }
        }
    }
    return true;
};

console.log(compare({name: 'John'},{name: 'John'}))





