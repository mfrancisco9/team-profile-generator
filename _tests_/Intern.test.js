const Intern = require("../lib/intern");

test("Properly creates an object for a new intern", () => {
  const trial = new Intern("Joe", "44", "joe@harvard.edu", "Harvard");

  expect(trial.school).toBe("Harvard");
  expect((trial.getRole())).toBe("intern");

});
