// Dependency Requirements
const fs = require("fs");
const inquirer = require("inquirer")

// Profiles
const Intern = require("./lib/intern.js");
const Engineer = require("./lib/engineer.js");
const Manager = require("./lib/manager.js");

// Team Array
const teamArray = [];

// HTML Generator
const renderHTML = require("./src/renderHTML.js");

// Manager Prompt
const addManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the name for the manager of this team?",
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
            type: 'input',
            name: 'id',
            message: 'Enter the ID of the team manager',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('You must enter an ID to continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the e-mail for the team manager',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('You must enter a valid email to continue');
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

const addNewEmployee = () => {
    console.log(`
    
    ******************
    Add New Employees
    ******************
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Choose the role for your new employee',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('You must enter a name to continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the ID of this employee',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('You must enter an ID to continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the e-mail for this employee',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('You must enter a valid email to continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the GitHub username for this employee',
            when: (input) => input.role === 'Engineer',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("You must provide a GitHub username to continue");
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter university for this intern',
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("You must the univeristy for this intern to continue");
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewEmployee',
            message: 'Would you like to add new team members?',
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmNewEmployee } = employeeData;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);
            console.log (employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log (employee);
        }

        teamArray.push(employee);
        if(confirmNewEmployee) {
            return addNewEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

// Function to write and store HTML file in dist folder
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your HTML page has been successfully written")
        }
    })
};

// Initialize JS
addManager()
    .then(addNewEmployee)
    .then(teamArray => {
        return renderHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });