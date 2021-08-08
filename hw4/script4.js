const fn4 = (number) => {
    let mas = []
    let min = 0
    let max = 100
    for (let i = 0; i < number; i++) {
      mas.push(Math.round((min + Math.random() * (max - min))))
    }
    return mas
  }
  
  console.log(fn4(5))