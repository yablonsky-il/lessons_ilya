const pluck = (mas, str) => {
    let newmas = mas.filter(item => item[str]).map(item => item[str]);
    return newmas;
  }
  
  console.log(pluck([{ name: 'barney', age: 36 }, { name: 'fred', age: 40 }], 'age'))