// НА КАЖДУЮ ЗАДАЧУ НУЖНО СОЗДАТЬ ОТДЕЛЬНЫЙ HTML ФАЙЛ //

/**
 * Задача 1
 * Дан input с type="password" и кнопка button.
 * В input вводится пароль. Реализовать toggle когда по нажатию на кнопку показывается пароль,
 * последующем нажатии прячется и так постоянно.
 */

//html
//<input type ="password" id="inputPassword" value="myWorld">
//<input type="button" value="Show Password" onclick="toggle()">

//Js

function toggle(){
    const element = document.getElementById("inputPassword");
    if (element.type === "password"){
        element.type = "text";
    } else {
        element.type = "password";
    };
}; 


/**
 * Задача 2
 * Дан textarea. Пусть в него вводится текст.
 * Сделайте так, чтобы при потери фокуса под textarea вывелось сообщение о том, сколько в этом тексте слов.
 */

//html
<div>
<textarea  name="text" id="text" onfocusout="str()"></textarea>
<div>
    <p id="number"></p>
</div>
</div>
//js

function str(){
    const text = document.getElementById("text").value;
    const p = document.getElementById("number");
    let a = text.split(' ').length;
    p.innerHTML = a;
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
<input type="text"  id="inputText">
<input type ="button"  value ="click me" onclick="fun()">
<h3 id="h3"></h3>

function fun(){
    const text = document.getElementById("inputText");
    const h = document.getElementById("h3");
    let result = "";
    let casual = "0123456789qwertyuiopasdfghjklzxcvbnm";
     for  (let i = 0; i < text.value; i++){
     result += casual.charAt(Math.floor(Math.random() * casual.length));
     }
     console.log(result)
     h.innerText = result;
    };