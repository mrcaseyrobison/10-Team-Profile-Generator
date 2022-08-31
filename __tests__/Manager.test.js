const Manager = require ('../lib/manager.js');

// Tests Manager Object
test ('creates a Manager object', () => {
    const manager = new Manager('Name', 50, 'name@company.com', 2062008000);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Tests Role
test ('gets role of Employee', () => {
    const manager = new Manager('Name', 50, 'name@company.com', 2062008000);

    expect(manager.getRole()).toEqual('Manager');
});