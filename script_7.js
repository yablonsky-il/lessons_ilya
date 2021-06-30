//задача 1

class Employee{
    constructor(name, surname, rate, days){
      this.name = name;
      this.surname = surname;
      this. rate = rate;
      this. days = days;
      this.salary = rate * days;
    }
    getName(){
      return this.name;
    }
    getSurname(){
      return this.surname;
    }
    getRate(){
      return this.rate;
      }
      getDays(){
        return this.days;
      }
      getSalary(){
       return this.salary;
      }
    
  }
  const employee = new Employee('Иван', 'Иванов', 10, 31);
  console.log(employee.salary);



  //задача 2

  class Employee {
    #privateName;
    #privateSurname;
    #privateRate;
    #privateDays;
    #privateSalary;
    constructor(name, surname, rate, days) {
      this.#privateName = name;
      this.#privateSurname = surname;
      this.#privateRate = rate;
      this.#privateDays = days;
      this.#privateSalary = rate * days;
    }
    getName() {
      return this.#privateName;
    }
    getSurname() {
      return this.#privateSurname;
    }
    getRate() {
      return this.#privateRate;
    }
    getDays() {
      return this.#privateDays;
    }
    getSalary() {
      return this.#privateSalary;
    }
  }
  const employee = new Employee('Иван', 'Иванов', 10, 31);
  console.log(employee.getSalary());
  

  //задача 3  

  class Employee {
    #privateName;
    #privateSurname;
    #privateRate;
    #privateDays;
  
    constructor(name, surname) {
      this.#privateName = name;
      this.#privateSurname = surname;
    }
    getName() {
      return this.#privateName;
    }
    getSurname() {
      return this.#privateSurname;
    }
     setRate(rate){
      this.#privateRate = rate;
    }
    getRate() {
      return this.#privateRate;
    }
    setDays(days){
      this.#privateDays = days;
    }
   get getDays() {
      return this.#privateDays;
    }
    getSalary() {
      return  this.#privateRate *  this.#privateDays;
    }
  }
  
  const employee = new Employee('Иван', 'Иванов');
  employee.setRate(20);
  employee.setDays(10);
  console.log(employee.getSalary());
  