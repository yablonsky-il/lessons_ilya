const compare = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const el1 = Object.values(obj1);
    const el2 = Object.values(obj2);

    if (keys1.length !== keys2.length) {
        return false;
      }

    for (let i=0; i<keys1.length; i++){
        if (keys1[i]!==keys2[i]){
            return false;
        }
    }

    for (let i=0; i<el1.length; i++){
        if (el1[i]!==el2[i]){
            return false;
        }
    }

    return true;
};

console.log(compare({ name: 'Steve', age: 30 }, { name: 'Steve', age: 31 }))

