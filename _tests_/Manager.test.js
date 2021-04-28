const Manager = require("../lib/manager");

test("Properly creates an object for a new manager", () => {
  const trial = new Manager("Susan", "01", "the_boss@gmail.com", "123");

  expect(trial.officeNumber).toBe("123");
  expect((trial.getRole())).toBe("manager");

});
