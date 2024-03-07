//import classes from other files

const Employee = require('./employee');
const Manager = require('./manager');
const EmployeeManagementSystem = require('./employeeManagementSystem');


//create instances of employees and managers
const emp1 = new Employee('John', 1, 'john@gmail.com')
const emp2 = new Employee('Jane', 2, 'jane@yahoo.com')
const emp3 = new Employee('Jim', 3, 'jim@hotmail.com')
const emp4 = new Employee('Jack', 4, 'jack@aol.com')
const emp5 = new Employee('Jill', 5, 'jill@outlook.com')
const manager = new Manager(Joanne, 6, 'joanne@gmail.com', 101)

//create an instance of the employee management system
const empSystem = new EmployeeManagementSystem();

//add employees and managers to the employee management system
empSystem.addEmployee(emp1);
empSystem.addEmployee(emp2);
empSystem.addEmployee(emp3);
empSystem.addEmployee(emp4);
empSystem.addEmployee(emp5);
empSystem.addManager(manager);

//print the employee management system
console.log("All Employees:");
console.log(empSystem.getAllEmployees());

