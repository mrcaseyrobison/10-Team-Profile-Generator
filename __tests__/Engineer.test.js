const Engineer = require('../lib/Engineer');

// Tests Engineer Object
test ('creates an Engineer object', () => {
    const engineer = new Engineer('Name', 50, 'name@company.com', 'username');

    expect(engineer.github) .toEqual(expect.any(String));
});

// Tests GitHub Username

test ('gets engineer gitHub value', () => {
    const engineer = new Engineer('Name', 50, 'name@company.com', 'username');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Tests Role

test ('gets role of employee', () => {
    const engineer = new Engineer('Name', 50, 'name@company.com', 'username');

    expect(engineer.getRole()).toEqual('Engineer');
});

