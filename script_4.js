// задача 1

let arr = [5, 9, 3, 7, 1, 8];

let result = arr.reduce(function(sum, elem) {
	return sum + elem;
}, 0);

console.log(result);

// задача 2

function camelize(str) {
    return str
      .split('-') .map( (color, index) => index == 0 ? color : color[0].toUpperCase() + color.slice(1)
      ).join('');
}      
console.log (camelize("background-color"))


// задача 3

const Newarr = ['a', 'b', 'c', 'd'].map(function(item, key){
    if ((key +1) % 2 ===0){
     return item.toUpperCase();
    } else {
       return item;
     }
    })
    console.log(Newarr)

    // задача 4
    function fn(n){
        const arr = []
        for (var i = 0; i < n; i++) {
           arr[i] = Math.floor(Math.random() * 100)
        }return arr}
           console.log(fn(5));

           // задача 5

           function fn(arr, str){
            const NewArr = Math.round(arr.length / 2);
             arr.splice( NewArr, 0, str);
            return arr;
            
          }
          console.log (fn(['a', 'b', 'c', 'd'], '*' ))

          // задача 7

 const arr = [[1, 2, 3, 4, 5], [6, 7, 8],[9, 10]];
const fn = (arr)=> {
  const result = [];
  for (let i = 0; i < arr.length; i ++){
    const item = arr [i];
    for (let j = 0; j < item.length; j ++){
      result.push(item[j]);
    }
  }
  
  return result;
};
console.log(fn(arr));

// задача 7

function fn(arr){
   let NewArr = []
   arr.map(function(item, index) {
     item.map(function(num){
      NewArr.push(num); 
     
    
    
 })});
 
      return NewArr;       
 }
 console.log(fn([[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]]));
             
             



    



           