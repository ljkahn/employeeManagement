//define the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


//method to get the employee's name
getName() {
    return this.name;
}



//method to get the employee's id
getId() {
    return this.id;
}


//method to get the employee's email
getEmail() {
    return this.email;
}


//method to get the employee's role
getRole() {
    return 'Employee';
}
};

//export the Employee class
module.exports = Employee; 