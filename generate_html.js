// TODO: Create a function to generate markdown for README
const index = require('./index.js');
var allEngineers = [];
var allInterns = [];
var allManagers = [];
var engineerCards = [];
var internCards = [];
var managerCards = [];

function parseInterns(interns) {
    allInterns = JSON.parse(interns);
    //console.log(allInterns);
}

function parseEngineers(engineers) {
    allEngineers = JSON.parse(engineers);
    //console.log(allEngineers);
}

function parseManagers(manager) {
    allManagers = JSON.parse(manager);
    //console.log(allManagers);
}

function genInternCards(interns) {
    for (var intern of interns) {
        internCards.push(`
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${intern.getName()}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
        `)
    }
}




function generateHTML(data) {
    //console.log(allEngineers, allInterns, manager);
    //const {  } = JSON.parse(data);

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
        <link rel="stylesheet" href="dist/styles.css" type="text/css">
    </head>
    <body>        
    ${internCards}
        <script src=""></script>
    </body>
</html>
`);
}

module.exports = { generateHTML, parseInterns, parseEngineers, parseManagers };

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