//import classes from other files

const Employee = require('./employee.js');
const Manager = require('./manager.js');
const EmployeeManagementSystem = require('./employeeManagementSystem.js');


//create instances of employees and managers
const emp1 = new Employee('John', 1, 'john@gmail.com')
const emp2 = new Employee('Jane', 2, 'jane@yahoo.com')
const emp3 = new Employee('Jim', 3, 'jim@hotmail.com')
const emp4 = new Employee('Jack', 4, 'jack@aol.com')
const emp5 = new Employee('Jill', 5, 'jill@outlook.com')
const manager = new Manager('Joanne', 6, 'joanne@gmail.com', 101)

//create an instance of the employee management system
const empSystem = new EmployeeManagementSystem();


//function to add an employee
const addEmployee = (name, id, email) => {
    const newEmp = new Employee(name, id, email);
    empSystem.addEmployee(newEmp);

}


// function to remove an employee
const removeEmployee = (id) => {
    empSystem.removeEmployee(id);
}

// check if command-line arguments are provided
if (process.argv.length >= 6 && process.argv[5] === 'remove') {
    const id = parseInt(process.argv[2]);
    removeEmployee(id);
} else if (process.argv.length >= 5) {
    const name = process.argv[2];
    const id = parseInt(process.argv[3]);
    const email = process.argv[4];
    addEmployee(name, id, email);
} else {
       console.log("Usage:");
    console.log("To add an employee: node index.js addEmployee <name> <id> <email>");
    console.log("To remove an employee: node index.js removeEmployee <id>");
}


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

