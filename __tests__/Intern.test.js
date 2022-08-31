const Intern = require('../lib/intern.js');

// Tests Intern Object
test ('creates an Intern object', () => {
    const intern = new Intern('Name', 50, 'name@company.com', 'school');

    expect(intern.school).toEqual(expect.any(String));
});

// Tests School
test ('gets employee school', () => {
    const intern = new Intern('Name', 50, 'name@company.com', 'school');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Tests Role

test ('get role of employee', () => {
    const intern = new Intern('Name', 50, 'name@company.com', 'school');

    expect(intern.getRole()).toEqual('Intern');
});