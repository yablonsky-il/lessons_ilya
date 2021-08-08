let obj = {
    x: 23,
    y: 17,
    n: true,
    k: 'string', 
    a: [],
}
const getSum = (obj) => {

    let sum = 0;

    for (let key in obj)
    if (typeof(obj[key]) === 'number') 
    sum+=obj[key];

    return sum;
};

console.log(getSum(obj))

// Вопрос. Сначала написала так
// if (+obj[key]) 
// sum+=obj[key];
// Но ответ выдало 41. Это из-за того, что n - булевская переменная? Или как это работает?