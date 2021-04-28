const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "manager"
    } // overwrites to manager
}

module.exports = Manager;