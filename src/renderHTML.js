// HTML Template

const renderTeamHTML = function (roleCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav id="navbar">
                <h1>Team Profile</h1>
            </nav>
        </header>
        <main>
            <div class="container">
                <div id="team-cards">
                    ${roleCards}
                </div>
            </div>
        </main>
    </body>
    </html>
    `;
}

// Creates Manager Card
const renderManager = function(manager) {
    return `
    <div class="employee-card">
        <div class="card">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>MANAGER</h4><i class="material-icons">groups</i>
            </div>

            <div class="card body">
                <ul class="list-group">
                    <li>ID: ${manager.id}</li>
                    <li>Email: <a href="mailto:${manager.email}">${manager.email}</li>
                    <li>Office Number: ${manager.officeNumber}</p>
                </ul>
            </div>
        </div>
    `
};

// Creates Engineer Card
const renderEngineer = function(engineer) {
    return `
    <div class="employee-card">
    <div class="card">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4>ENGINEER</h4><i class="material-icons">engineering</i>
        </div>

        <div class="card body">
            <ul class="list-group">
                <li>ID: ${engineer.id}</li>
                <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</li>
                <li>GitHub: <a href="https://www.github.com/${engineer.github}" target="blank">${engineer.github}</a></li>
            </ul>
        </div>
    </div>
    `
};

// Creates Intern Card
const renderIntern = function(intern) {
    return `
    <div class="employee-card">
    <div class="card">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>INTERN</h4><i class="material-icons">school</i>
        </div>

        <div class="card body">
            <ul class="list-group">
                <li>ID: ${intern.id}</li>
                <li>Email: <a href="mailto:${intern.email}">${intern.email}</li>
                <li>School: ${intern.school}</li>
            </ul>
        </div>
    </div>
    `
};

// Function to Render HTML
renderHTML = (data) => {
    employeeArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // Call Intern Function
        if (role === "Intern") {
            const internCard = renderIntern(employee);
            employeeArray.push(internCard);
        }

        // Call Engineer Function
        if (role === "Engineer") {
            const engineerCard = renderEngineer(employee);
            employeeArray.push(engineerCard);
        }

        // Call Manager Function
        if (role === "Manager") {
            const managerCard = renderManager(employee);
            employeeArray.push(managerCard);
        }
    }

    const roleCards = employeeArray.join('')
    const renderTeam = renderTeamHTML(roleCards);
    return renderTeam;
}


// Export to Index
module.exports = renderHTML;
