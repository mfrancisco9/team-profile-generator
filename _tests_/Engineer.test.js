const Engineer = require("../lib/engineer");

test('Properly creates an object for a new engineer', () => {
    const trial = new Engineer("Jacob", "55", "jacob@gmail.com", "jacob_codes")
    
    expect((trial.name)).toBe("Jacob");
    expect((trial.getGitHub())).toBe("jacob_codes");

});