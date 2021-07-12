/**
 * 1. Закончить задачу, начатую на занятии (получить массив объектов пользователей - https://jsonplaceholder.typicode.com/users)
 * 2. Отрендерить кнопки (табики), где одна кнопка показывает данные об одном объекте user
 * 3. Оформить интерфейс стилями (на ваш дизайнерский взгляд)
 */

const container = document.getElementById('container');

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
};

/**
 * Здесь представлен пример обращения к глубоков вложенным данным объекта
 * и отрисовки UI используя шаблонные строки
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Template_literals
 */
const element = `
   <div>${user.name}</div>
   <div>${user.username}</div>
   <div>${user.email}</div>
   <div>
     <div>${user.address.street}</div>
     <div>${user.address.suite}</div>
     <div>${user.address.city}</div>
     <div>${user.address.zipcode}</div>
     <div>
       <div>${user.address.geo.lat}</div>
       <div>${user.address.geo.lng}</div>
     </div>
   </div>
 `;

container.innerHTML = element;
