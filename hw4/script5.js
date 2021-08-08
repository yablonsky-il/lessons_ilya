const fn5 = (mas, string) => {
    let start = mas.slice(0, mas.length/2)
    let finish = mas.slice(mas.length/2, mas.length)
    let center = [string]
    return (start.concat(center)).concat(finish)
  }
    
  console.log(fn5(['1', '2', '3', '4', '5', '6'], '*'))