const fn3 = (mas) => {
    const fun = (el, index) => {
      if (index % 2 === 1){
        el = el.toUpperCase();
      }
      return el;
    }
    mas2 = mas.map(fun)
    return mas2;
  }
  
  console.log(fn3(['a','b', 'c', 'd']));