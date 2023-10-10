// TODO: Include packages needed for this application
const { log } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'what is the title of the project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description'
    },

    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation'
    },

    {
        type: 'input',
        message: 'Provide usage instructions and examples for use',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Provide the license type',
        name: 'license',
        choices: ['MIT', 'Apache', 'ISC']
    },
  
    {
        type: 'input',
        message: 'what is your github username',
        name: 'gituser'
    },
    
    {
        type: 'input',
        message: 'what are the contribution guidlines?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Provide test instuctions',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Provide frequently asked questions',
        name: 'questions'
    },
    {
        type: 'input',
        message: 'Provide your email',
        name: 'email'
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('${fileName} created successfully');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        const readmeContent = generateMarkdown(responses); 
        writeToFile('README.md', readmeContent);
    })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();
