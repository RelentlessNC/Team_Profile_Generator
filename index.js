// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//const output = require('./generate_html');
const fs = require('fs');


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
        console.log(answers);
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
        .then((answers) => {
            if (answers === 'Intern') {
                addIntern();
            } else if (answers === 'Engineer') {
                addEngineer();
            } else {
                return;
            }

        })
    }

function addIntern(){
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
    },{
    type: 'input',
    name: 'internSchool',
    message: "Intern's school: "
    }
])
    .then((answers) => {

    })
}

function addEngineer(){
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
    },{
    type: 'input',
    name: 'gitHubUsername',
    message: "Github Username: "
    }
])
    .then((answers) => {

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
