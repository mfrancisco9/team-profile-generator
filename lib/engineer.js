const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email);
        this.username = username;
    }

    getGitHub() {
        return this.username 
    }
    getRole() {
        return "engineer"
    } 
}

module.exports = Engineer;
