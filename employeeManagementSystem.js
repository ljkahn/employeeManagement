//define the EmployeeManagementSystem class
class EmployeeManagementSystem {
    constructor() {
        this.employees = [];
    }

    //method to add an employee to the employee management system
    addEmployee(employee) {
        this.employees.push(employee);
    }

    //method to add a manager to the employee management system
    addManager(manager) {
        this.employees.push(manager);
    }

    //method to get all employees in the employee management system
    getAllEmployees() {
        return this.employees;
    }
}

//export the EmployeeManagementSystem class 
module.exports = EmployeeManagementSystem;