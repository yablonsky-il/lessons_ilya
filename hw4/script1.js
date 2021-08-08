const fn1 = (mas) => {
    return mas.reduce((sum, current) => sum + current)
}

console.log(fn1([1, 2, 3, 4, 5]));