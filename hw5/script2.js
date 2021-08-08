let object={}

const isEmpty = (obj) => {
for (let key in obj) {
    return false;
}

return true;
};

console.log(isEmpty( {x: 23, y: 17, n: true, k: 'string', a: []}))