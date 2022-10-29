// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

const generateHTML = ({name,location,github,linkedin})=>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>
`;
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },
        {
            type:'input',
            message:'What inspired you to make this project',
            name:'project'
        },
        {
            type:'input',
            message:'What problems does this solve?',
            name:'solve'
        },
        {
            type:'list',
            message: 'what do you like to use the most?',
            choices:['Javascript','HTML','CSS'],
            name:'message'
        },{
            type:'list',
            message:'Whats your Github email?',
            name:'github'
        },

    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);
    
        fs.writeFile('README.md', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md file📝!')
        );
      });

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
// Function call to initialize app
