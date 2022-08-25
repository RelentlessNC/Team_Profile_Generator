// TODO: Create a function to generate markdown for README
function generateHTML(data) {
    //const {  } = JSON.parse(data);

    return (`
    <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
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