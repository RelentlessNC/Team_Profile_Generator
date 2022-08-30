// TODO: Create a function to generate markdown for README
const index = require('./index.js');
const fs = require('fs');
var allEngineers = [];
var allInterns = [];
var manager;
var allCards = '';

async function init(m, engineers, interns) {
    manager = JSON.parse(m);
    allEngineers = JSON.parse(engineers);
    allInterns = JSON.parse(interns);
    await managerCard();
    await parseEngineers();
    await parseInterns();
    fs.writeFile('dist/index.html', generateHTML(), (err) => {
        err ? console.log(err) : console.log(`Successfully Created file`)
    });


}

async function managerCard() {
    allCards += `
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${manager.name}<hr>${manager.role}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email: ${manager.email}</li>
    <li class="list-group-item">School: ${manager.officeNumber}</li>
  </ul>
</div>
        `;
}

async function parseEngineers() {
    for (var engineer of allEngineers) {
        allCards += `
      <div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">${engineer.name}<hr>${engineer.role}</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${engineer.id}</li>
  <li class="list-group-item">Email: ${engineer.email}</li>
  <li class="list-group-item">School: ${engineer.gitHubUsername}</li>
</ul>
</div>
      `
    }
}

async function parseInterns() {
    for (var intern of allInterns) {
        allCards += `
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${intern.name}<hr>${intern.role}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item">Email: ${intern.email}</li>
    <li class="list-group-item">School: ${intern.school}</li>
  </ul>
</div>
        `
    }
}

function generateHTML() {
    return (`
    <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Dev Team</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="dist/css_reset.css" type="text/css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="dist/styles.css" type="text/css">
    </head>
    <body>
    ${allCards}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
</html>
`);
}

module.exports = { generateHTML, init };

/*
So you'll have a function that will do the backbone of the html, right? 
Like the doctype html and the head and all that, 
but first you will have to have 3 separate functions that render the specifics 
for manager, engineer, and intern. So when you have your final variable of teamMembers 
being passed into the generate html file, you'll have to take that one variable 
that you are sending over, and filter out data for each of the 3 choices - manager,intern, engineer. 
Once you filter it, you can map (loop) that array of objects to create the appropriate html for that role, 
and when you have all of the html for one role, let's say, manager, 
you would add the manager's collected htmls all to a variable. 
Do that with each role until you have a variable populated with the html cards pertaining to all roles. Then you can pass that variable of the html to the final function that will have the default html sytnax
*/