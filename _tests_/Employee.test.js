const Employee = require("../lib/Employee");

test("Properly creates an object for a new employee.", () => {
  const trial = new Employee("name", 12345, "email");

  expect(trial.id).toBe(12345);
});
