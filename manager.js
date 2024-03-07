//import the Employee class
const Employee = require('./employee.js');

//define the Manager class, which extends the Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //call the parent constructor with the super keyword
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

 //method to get the manager's role
    getRole() {
        return 'Manager';
    }

};

//export the Manager class
module.exports = Manager;