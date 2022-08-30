// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const gen_html = require('./generate_html.js');
const fs = require('fs');
const Intern = require('./lib/intern_class.js');
const Engineer = require('./lib/engineer_class.js');
const Manager = require('./lib/manager_class.js');
var allEngineers = [];
var allInterns = [];
var manager;


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([{
                type: 'input',
                name: 'managerName',
                message: "Manager's Name: "
            },
            {
                type: 'input',
                name: 'managerId',
                message: "Manager's ID #: "
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "Manager's Email: "
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: "Manager's Office #: "
            }
        ])

    .then((answers) => {
            const { managerName, managerId, managerEmail, managerOffice } = answers;
            manager = new Manager(managerName, managerId, managerEmail, managerOffice);
            nextEmployee();
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });

}

function nextEmployee() {
    inquirer
        .prompt([{

            type: 'list',
            name: 'role',
            message: "Select the role of your next team member: ",
            choices: [{
                    name: 'none',
                    value: 'No more team members'
                },
                {
                    name: 'engineer',
                    value: 'Engineer'
                },
                {
                    name: 'intern',
                    value: 'Intern'
                }
            ]
        }])
        .then(async(answer) => {
            if (answer.role === 'Intern') {
                let i = await addIntern();
                allInterns.push(i);
                nextEmployee();
            } else if (answer.role === 'Engineer') {
                let e = await addEngineer();
                allEngineers.push(e);
                nextEmployee();
            } else {
                /*    SEND ALL EMPLOYEE INFO TO HTML*/
                gen_html.init(JSON.stringify(manager), JSON.stringify(allEngineers), JSON.stringify(allInterns));
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

function addIntern() {
    return new Promise((resolve, reject) => {
        resolve(
            inquirer
            .prompt([{
                    type: 'input',
                    name: 'internName',
                    message: "Intern's name: "
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: "Intern's ID #: "
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: "Intern's email: "
                }, {
                    type: 'input',
                    name: 'internSchool',
                    message: "Intern's school: "
                }
            ])
            .then((answers) => {
                const { internName, internId, internEmail, internSchool } = answers;
                let intern = new Intern(internName, internId, internEmail, internSchool);
                return intern;
            })
            .catch((err) => {
                console.log(err);
            })
        )
    })

}

function addEngineer() {
    return new Promise((resolve, reject) => {
        resolve(
            inquirer
            .prompt([{
                    type: 'input',
                    name: 'engineerName',
                    message: "Engineer's name: "
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: "Engineer's ID #: "
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "engineer's email: "
                }, {
                    type: 'input',
                    name: 'gitHubUsername',
                    message: "Github Username: "
                }
            ])
            .then((answers) => { // answers is an object
                const { engineerName, engineerId, engineerEmail, gitHubUsername } = answers; // destructure object into constants
                let engineer = new Engineer(engineerName, engineerId, engineerEmail, gitHubUsername); // create new engineer with constants from destructured object
                return engineer;
            })
            .catch((err) => {
                console.log(err);
            })
        )
    })
}

// Function call to initialize app
init();