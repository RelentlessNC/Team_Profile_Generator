const Employee = require('./employee_class.js');

class Engineer extends Employee {
    constructor(name, id, email, gitHubUsername) {
        super(name, id, email);
        this.gitHubUsername = gitHubUsername;
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.gitHubUsername;
    }
}