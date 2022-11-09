// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Project-Title',
        message: 'What is the name of your project?',
      },

      {
        type: 'input',
        name: 'Description',
        message: 'Please add a description of your project',
      },

      {
        type: 'input',
        name: 'Installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'Contributing',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'What are the testing instructions?',
      },
      {
        type: 'list',
        name: 'License',
        message: 'Which license are you using for this project?(Use up and down arrow keys to select.)',
        choices: [
            'Apache 2.0',
            'MIT',
            'GPL 3.0',
            'None'
        ],
      },
      {
        type: 'input',
        name: 'Github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readMeInfo => {
        return readMeInfo
    })
}

// Function call to initialize app
init();

