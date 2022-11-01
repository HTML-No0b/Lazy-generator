// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')
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
            message: 'Describe your project',
            name: 'description'
        },
        {
            type: 'input',
            message: 'How does someone use your program?',
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
            message: 'What is your e-mail address?',
            name: 'email'
        },

        {
            type: 'input',
            message: 'How can someone add to your project?',
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
