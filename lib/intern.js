// Import Employee Constructor Template
const Employee = require("./Employee.js");

// Intern Constructor Extends Employee Constructor
class Intern extends Employee {
   constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    // Returns School from User Input
    getSchool() {
        return this.school;
    }

    // Overrides Generic Employee Role to Intern
    getRole() {
        return "Intern";
    }
}

// Module Export
module.exports = Intern;