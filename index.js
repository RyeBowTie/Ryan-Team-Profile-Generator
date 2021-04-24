const inquirer = require("inquirer")

function managerInfo () {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the their name?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is their employee id number?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is their email address?'  
        },
        {
            name: 'office',
            type: 'input',
            message: "What is their office number?"
        },
        {
            name: 'add',
            type: 'list',
            choices: ['Add Engineer', 'Add Intern', 'No more team members']
        },
    ]);
};

function engineerInfo() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the their name?',
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is their employee id number?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is their email address?'  
        },
        {
            name: 'github',
            type: 'input',
            message: 'What is their Git Hub username?'
        },
        {
            name: 'add',
            type: 'list',
            choices: ['Add Engineer', 'Add Intern', 'No more team members']
        },
    ]);
};

function internInfo () {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is the their name?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is their employee id number?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is their email address?'  
        },
        {
            name: 'school',
            type: 'input',
            message: 'what school do they attend?'
        },
        {
            name: 'add',
            type: 'list',
            choices: ['Add Engineer', 'Add Intern', 'No more team members']
        },
    ]);
};