// Import Employee Constructor Template
const Employee = require("./Employee.js");

// Manager Constructor Extends Employee Constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

     // Overrides Generic Employee Role to Manager
     getRole() {
        return "Manager";
     }
}

// Module Export
module.exports = Manager;