const fn2 = (str) => {
    let mas = str.split('-');
    mas[1] = (mas[1])[0].toUpperCase() + mas[1].slice(1);
    return mas.join('')
}

console.log(fn2('background-color'));