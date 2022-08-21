// Dependency Requirements
const fs = require("fs");
const inquirer = require("inquirer")

// Profiles
const Intern = require("lib/intern.js");
const Engineer = require("lib/engineer.js");
const Manager = require("lib/manager.js");

// Team Array
const teamArray = [];

// HTML Generator
const renderHTML = require("src/renderHTML.js");

// Manager Prompt
const manager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Please add info for the manager of this team.",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log ("You must provide information in this prmpt!");
                    return false;
                }
            }     
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the managers office number?",
            validate: managerName => {
                if (isNaN(managerName)) {
                    console.log ("You must enter a number")
                     return false;
                } else {
                    return true;
            }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

// Other Employee Prompts