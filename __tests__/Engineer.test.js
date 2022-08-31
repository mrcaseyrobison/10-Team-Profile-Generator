const Engineer = require('../lib/Engineer');

// Tests Engineer Object
test ('creates an Engineer object', () => {
    const engineer = new Engineer('Name', 50, 'name@company.com', 'username');

    expect(engineer.github) .toEqual(expect.any(String));
});

