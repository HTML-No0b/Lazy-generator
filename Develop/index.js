// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')
// const generateHTML = ({ name, location, github, linkedin , solved }) =>
//     `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <div class="jumbotron">
//     <h1 class="display-4">Hello, world my name is ${name}!</h1>
//     <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
//     <hr class="my-4">
//     <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
//     <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
//   </div>
//   <div>
//       <li class="list-group\-item">LinkedIn: ${linkedin}</li>
    
//   </div>
// </div>
// </body>
// </html>
// `;
const questions = [

    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
        {
            type: 'input',
            message: 'What is your Github Username?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'Descrvibe your project',
            name: 'description'
        },
        {
            type: 'input',
            message: 'How does someone use this program?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'What command can be use to install dependencies?',
            name: 'install'
        },
        {
            type: 'input',
            message: 'What command should be used to run tests?',
            name: 'test'
        },
        {
            type: 'list',
            message: 'What license would you like to use?',
            choices: ['MIT', 'HBoost-Software-1.0', 'Unlicense','None'],
            name: 'license'
        }, 
        {
            type: 'input',
            message: 'Whats your email?',
            name: 'email'
        },

        {
            type: 'input',
            message: 'How can someone add to this project?',
            name: 'contribute'
        },
    ]
    function writeFile(filename,data){
        return fs.writeFileSync(path.join(process.cwd(),filename),data)
    };

    function init(){
        inquirer.prompt(questions)
        .then((inquirerresponses)=>{
            console.log('generating README.md file📝');
            writeFile('README.md', generateMarkdown({...inquirerresponses}))
        })
    };





init();



    // .then((answers) => {
    //     const htmlPageContent = generateHTML(answers);

    //     fs.writeFile('README.md', htmlPageContent, (err) =>
    //         err ? console.log(err) : console.log('Successfully created README.md file📝!')
    //     );
    // });

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
// Function call to initialize app
