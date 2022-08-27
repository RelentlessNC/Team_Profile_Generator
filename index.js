// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const output = require('./generate_html');
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
                name: 'manager',
                message: "Manager's Name: "
            },
            {
                type: 'input',
                name: 'managerID',
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
            const { name, id, email, officeNumber } = answers;
            manager = new Manager(name, id, email, officeNumber);
            console.log(manager);
            //fs.writeFile('dist/index.html', output.generateHTML(JSON.stringify(answers)), (err) =>
            //err ? console.log(err) : console.log(`Successfully Created`)
            //);
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
                //console.log(i);
                allInterns.push(i);
                nextEmployee();
            } else if (answer.role === 'Engineer') {
                let e = await addEngineer();
                //console.log(e);
                allEngineers.push(e);
                nextEmployee();
            } else {
                //console.log(allEngineers, allInterns, manager);
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
                    name: 'internID',
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
                const { name, id, email, school } = answers;
                let intern = new Intern(name, id, email, school);
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
                    name: 'engineerID',
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
                const { name, id, email, gitHubUsername } = answers; // destructure object into constants
                let engineer = new Engineer(name, id, email, gitHubUsername); // create new engineer with constants from destructured object
                console.log(engineer);
            })
            .catch((err) => {
                console.log(err);
            })
        )
    })
}

// function writeFile(fileName, content) {
//     fs.writeFile('README.md', md.generateMarkdown(JSON.stringify(answers)), (err) =>
//         err ? console.log(err) : console.log(`Successfully Created ${fileName}`)
//     );
// }

// writeFile("index.html", htmlPageContent);
// writeFile("style.css", cssContent);

// Function call to initialize app
init();