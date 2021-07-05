/**
 * Задача 1
 * Создать функцию getMessageWithdelay, которая возвращает промис.
 * Функция принимает message и delay.
 * Промис должен перейти в состояние "fulfilled" через заданный delay и вывести в консоль переданное сообщение
 * @param {String} message
 * @param {Number} delay
 * @returns {Promise}
 */
const getMessageWithdelay = (message, delay) => {
  // Code here
};

const getMessageWithdelay = (message, delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Good morning, World'), 3000);
  });
const promise = getMessageWithdelay();
promise.then(data => console.log(data));

/**
 * Задача 2
 * Создать функцию getCommentsByPostId, которая принимает число postId.
 * Обратиться к серверу по маршруту 'https://jsonplaceholder.typicode.com/comments' использую fetch
 * Из полученного ответа вывести в консоль:
 * 1) Все посты по переданному postId
 * 2) Массив объектов который будет содержать только id и email
 * Для решения задачи использовать .then()
 * @param {Number} postId
 * @returns {Promise}
 */
 const getCommentsByPostIdWithThen = (postId) => {
  // Code here
};

const getCommentsByPostIdWithThen = (postId) =>
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(res => res.json())
  .then((data) => data.filter((item) => item.postId === postId))
  .then(console.log);
  getCommentsByPostIdWithThen(7)

/**
 * Задача 3
 * С точно такой же логикой изменить реализацию функции getCommentsByPostId на async/await
 * @param {Number} postId
 * @returns {Promise}
 */
 const getCommentsByPostIdWithAsync = async (postId) => {
  // Code here
};
const arr = [
  fetch('https://jsonplaceholder.typicode.com/comments')
];

const getCommentsByPostIdWithThen = async (postId) => {
  const promises = await Promise.all(arr);
  const result = await promises[0].json();
  console.log('result', result);
  return result;
}
  getCommentsByPostIdWithThen(4);
