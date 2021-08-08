//for

const fn7 = (mas) => {
    let result = []
    for (let i = 0; i < mas.length - 1; i++) {
      result = mas[0].concat(mas[i].concat(mas[i + 1]))
    }
    return result
  }
  
  console.log(fn7([[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]]))
  
 //map 
  
  const fn7 = (array) => {
    let newArr = [];
    let callBack = (arrEl) => {
      if (arrEl instanceof Array){
        for (let el of arrEl){
          newArr.push(el);
        }
      }
    }
    array.map(callBack);
    return newArr;
  }
  
  console.log(fn7([[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]]));