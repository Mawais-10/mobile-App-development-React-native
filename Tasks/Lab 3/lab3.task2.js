
class Employee {
  constructor(name = "", dept = "general") {
    this.name = name;
    this.dept = dept;
  }
}


class Manager extends Employee {
  constructor(name, dept) {
    super(name, dept);
    this.reports = [];   
  }
}



class WorkerBee extends Employee {
  constructor(name, dept) {
    super(name, dept);
    this.projects = [];  
  }
}



class SalesPerson extends WorkerBee {
  constructor(name) {
    super(name, "sales"); 
    this.quota = 100;     
  }
}


class Engineer extends WorkerBee {
  constructor(name) {
    super(name, "engineering"); 
    this.machine = "";       
  }
}



const manager1 = new Manager("Ali", "HR");


const emp1 = new Employee("Usman");
const emp2 = new Employee("Ahmed");

manager1.reports.push(emp1);
manager1.reports.push(emp2);


const sales1 = new SalesPerson("Sara");
sales1.projects.push("Client Project A");


const engineer1 = new Engineer("Bilal");
engineer1.projects.push("Software System");
engineer1.machine = "Dell XPS";


console.log(manager1);
console.log(sales1);
console.log(engineer1);
