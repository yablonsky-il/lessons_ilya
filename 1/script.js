const input = document.getElementById('input');
const button = document.getElementById('button');
const container = document.getElementById('container');

button.onclick = () => {
  for (let i = 0; i < input.value; i++) { 
    let divbig = document.createElement('div');
    divbig.className = 'divbig';
    container.append(divbig)
    for (let n = 0; n < input.value; n++) {
      let divsmall = document.createElement('div');
      divsmall.className = 'divsmall';
      divbig.append(divsmall)
      let random = () => {
        let possible = '0123456789';
        for (let i = 0; i < input.value**2; i++) {
          return possible.charAt(Math.floor(Math.random() * possible.length));
        }
      };
      divsmall.innerText = random();
    }
  }
}