// Employerr Constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    // Return Employee Name From User Input
    getName() {
        return this.name;
    }

    // Return Employee ID from User Input
    getId() {
        return this.id;
    }

    // Return Employee Email from User Input
    getEmail() {
        return this.email;
    }

    // Return Employee Role from User Input
    getRole() {
        return "Employee"
    }
};

// Module Export
module.exports = Employee;