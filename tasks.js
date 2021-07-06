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
  new Promise((resolve,reject) => {
    setTimeout(() => resolve(message),delay);
  }).then(console.log)
};
getMessageWithdelay('hello',2000)
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
  fetch('https://jsonplaceholder.typicode.com/comments ')
    .then((response) => response.json())
    .then((arr) => arr.filter((obj) => obj.postId === postId))
    .then(result => {console.log(result); return result;})
    .then((arr) => arr.filter((obj) => obj.postId === postId).map(obj => {
    return {postId: obj.postId, email: obj.email}
    }))
    .then(console.log)
};
getCommentsByPostIdWithThen(4)
/**
 * Задача 3
 * С точно такой же логикой изменить реализацию функции getCommentsByPostId на async/await
 * @param {Number} postId
 * @returns {Promise}
 */
  
 const getCommentsByPostIdWithAsync = async (postId) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments ')
  const data = await response.json()
  const result = data.filter((obj) => obj.postId === postId)
  const result2 = result.map(({id, email}) => ({id, email}))
  console.log(result)
  console.log(result2)
}
getCommentsByPostIdWithAsync(3)