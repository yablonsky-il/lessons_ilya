/**
 * Задача 1
 * Реализуйте класс Employee (Работник), который будет иметь следующие свойства:
 * name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
 * Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */
class Employee {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getName() {
        return this.name;
    }
    getSurname() {
        return this.surname;
    }
    getRate() {
        return this.rate;
    }
    getDays() {
        return this.days;
    }
    getSalary() {
        return (getRate * getDays);
    }
}



const employee = new Employee('Иван', 'Иванов', 10, 31);

console.log(employee.name); // выведет 'Иван'
console.log(employee.surname); // выведет 'Иванов'
console.log(employee.rate); // выведет 10
console.log(employee.days); // выведет 31
console.log(employee.getSalary()); // выведет 310 - то есть 10*31

/**
 * Задача 2
 * Модифицируйте класс Employee из предыдущей задачи следующим образом:
 * сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.
 * Наш класс теперь будет работать так:
 */
 class Employee {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getName() {
        return this.name;
    }
    getSurname() {
        return this.surname;
    }
    getRate() {
        return this.rate;
    }
    getDays() {
        return this.days;
    }
    getSalary() {
        return (getRate * getDays);
    }
}

const employee = new Employee('Иван', 'Иванов', 10, 31);


console.log(employee.getName()); // выведет 'Иван'
console.log(employee.getSurname()); // выведет 'Иванов'
console.log(employee.getRate()); // выведет 10
console.log(employee.getDays()); // выведет 31
console.log(employee.getSalary()); // выведет 310 - то есть 10*31

/**
 * Задача 3
 * Модифицируйте класс Employee из предыдущей задачи следующим образом:
 * для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:
 */
// Теперь используем сеттер:
employee.setRate(20); // увеличим ставку
employee.setDays(10); // уменьшим дни
console.log(employee.getSalary()); // выведет 200 - то есть 20*10