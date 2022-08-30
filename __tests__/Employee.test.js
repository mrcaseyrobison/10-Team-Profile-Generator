const Employee = require ('../lib/employee.js');

// Tests whether an employee object has been created
test ('creates an employee object', () => {
    const employee = new Employee ('Name', 50, 'name@company.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Tests Name
test ('gets employee name', () => {
    const employee = new Employee ('Name', 50, 'name@company.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Tests ID
test ('gets employee ID number', () => {
    const employee = new Employee ('Name', 50, 'name@company.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Tests Email
test ('gets employee email', () => {
    const employee = new Employee ('Name', 50, 'name@company.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// Gets Role
test ('gets employee role', () => {
    const employee = new Employee ('Name', 50, 'name@company.com');

    expect(employee.getRole()).toEqual('Employee');
});


