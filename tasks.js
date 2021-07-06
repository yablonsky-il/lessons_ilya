// НА КАЖДУЮ ЗАДАЧУ НУЖНО СОЗДАТЬ ОТДЕЛЬНЫЙ HTML ФАЙЛ //

/**
 * Задача 1
 * Дан input с type="password" и кнопка button.
 * В input вводится пароль. Реализовать toggle когда по нажатию на кнопку показывается пароль,
 * последующем нажатии прячется и так постоянно.
 */
//html
//<input type="text" id="input"> <button id="button">button</button><p id="p"></p>
//js
const input = document.getElementById('input')
const button = document.getElementById('button')

button.onclick = () => input.type === 'password' ? input.type = 'text' : input.type = 'password'
/**
 * Задача 2
 * Дан textarea. Пусть в него вводится текст.
 * Сделайте так, чтобы при потери фокуса под textarea вывелось сообщение о том, сколько в этом тексте слов.
 */
//html
<textarea id="area" type="text" placeholder='Введите текст'  onblur='func()'></textarea>
   <p id="res"></p>
//js
 function func(){
    let str = document.getElementById("area");
    let p = document.getElementById("res");
    let arr = str.value.split(' ');
    p.innerHTML = +arr.length;
  }
/**
 * Задача 3*
 * Дан input и кнопка button. Реализуйте рандомайзер.
 * В input вводится длина генерируемой строки.
 * По нажатию на кнопку генерируется случайный набор символов (строка)
 * Для использования:
 * Math.random - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * charAt - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
 */
//html
<input type="text" id="input"> <button id="button">button</button><p id="p"></p>
</input>
//js
const input = document.getElementById('input')
const button = document.getElementById('button')
const p = document.getElementById('p')

button.onclick = () => {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < +input.value; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  p.innerText = text
}