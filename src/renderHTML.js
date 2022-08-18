// Creates Intern Card
const generateIntern = function(intern) {
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
const generateManager = function(manager) {
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
const generateEngineer = function(engineer) {
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