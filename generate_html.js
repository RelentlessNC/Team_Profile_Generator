// TODO: Create a function to generate markdown for README
const index = require('./index.js');
const allEngineers = [];
const allInterns = [];
const manager = [];

function parseInterns(interns) {
    allInterns = JSON.parse(index.allInterns);
    console.log(allInterns);
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
        <script src=""></script>
    </body>
</html>
`);
}

module.exports = { generateHTML };