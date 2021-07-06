// TASK one
let	button = document.getElementById("butt");
let	input = document.getElementById("input")

button.onclick = () => input.type === 'password' ? input.type = 'text' : input.type = 'password'


// TASK two
function func(){
	let	str = document.getElementById("area");
	let	p = document.getElementById("res");
	let arr = str.value.split(' ');
	p.innerHTML = +arr.length;
}





// TASK third

const input = document.getElementById('input')
const button = document.getElementById('butt')
const p = document.getElementById('text')

button.onclick = () => {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < +input.value; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return p.innerText = text
}