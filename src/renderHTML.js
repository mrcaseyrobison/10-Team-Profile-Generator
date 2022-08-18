// Creates Intern Card
const renderIntern = function(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${inern.name}</h3>
                <h4>INTERN</h4><i class="material-icons">assignment_ind</i>
            </div>

            <div class="card body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    <div>
    `
};

// Creates Manager Card
const renderManager = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>MANAGER</h4><i class="material-icons">content_paste</i>
            </div>

            <div class="card body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office-number">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    <div>
    `
};
// Creates Engineer Card
const renderEngineer = function(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>ENGINEER</h4><i class="material-icons">content_paste</i>
            </div>

            <div class="card body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">GitHub: <a href="https://www.github.com/${engineer.github} target="blank">${engineer.github}></a></p>
            </div>
        </div>
    <div>
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
            const internCard = renderEngineer(employee);
            employeeArray.push(engineerCard);
        }

        // Call Manager Function
        if (role === "Manager") {
            const internCard = renderManager(employee);
            employeeArray.push(managerCard);
        }
    }

    const roleCards = employeeArray.join('')
    const renderTeam = renderTeamHTML(roleCards);
    return renderTeam;
}

// HTML Template

const renderTeamHTML = function (roleCards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link ref="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
    <link ref="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link ref="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap">
    <link ref="stylesheet" href="dist/style.css">
</head>
<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                ${roleCards}
            </div>
        </div>
    </main>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
</html>
`;
}

// Export to Index
module.exports = remderHTML;
