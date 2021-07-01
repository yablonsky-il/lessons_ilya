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

/**
 * Задача 3
 * С точно такой же логикой изменить реализацию функции getCommentsByPostId на async/await
 * @param {Number} postId
 * @returns {Promise}
 */
 const getCommentsByPostIdWithAsync = async (postId) => {
  // Code here
};
