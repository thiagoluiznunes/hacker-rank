'use strict'

class Employee {
    constructor(n, s, j) {
        let name = n;
        let salary = s;
        let journey = j;
        
        this.getName = () => name;
        this.getSalary = () => salary;
        this.getJourney = () => journey;

        this.setName = (input) => { name = input };
        this.setSalary = (input) => { salary = input };
        this.setJourney = (input) => { journey = input };
    }
}

let emp01 = new Employee('Thiago', 1500, 4);
let emp02 = new Employee('Matheus', 3500, 8);

console.log('Employee name: ', emp01.getName());
emp01.setName('Thiago Luiz');
console.log('Employee name: ', emp01.getName());

console.log('Employee name: ', emp02.getName());
emp02.setName('Matheus Cesar');
console.log('Employee name: ', emp02.getName());