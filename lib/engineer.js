// Import Employee Constructor Template
const Employee = require("./Employee.js");

// Engineer Constructor extends Employee Constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    // Returns Github Account from User Input
    getGitHub() {
        return this.github;
    }

    // Overrides Generic Employee Role to Engineer
    getRole() {
        return "Engineer";
    }
} 

// Module Export
module.exports = Engineer;