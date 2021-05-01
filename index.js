const inquirer = require("inquirer");
const fs = require('fs');

const website1 = require('./src/HTML1');
const website2 = require('./src/HTML2');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const templateArray = [];

function addToTemplate () {
    const websiteArray = [website1, templateArray.join(''), website2];
    writeFile(websiteArray.join('')); 
};

function writeFile(website) {
    fs.writeFile('./dist/index.html', website, (err) =>
    err ? console.error(err) : console.log('Success!') 
    );
};

function managerInfo () {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is their name?'
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
    ])
    .then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.office)
        const template = 
        `<div class="card">
            <div class="card-body">
                <h4 class="card-title">MANAGER</h4>
                <h5 class="name">${manager.name}</h5>
                <h5 class="employeeID">ID: ${manager.id}</h5>
                <address>
                    <a href="mailto:${manager.email}">${manager.email}</a>
                </address>
                <h5 class="office">Office: ${manager.office}</h5>
            </div>
        </div>`
        templateArray.push(template);
        nextTeamMember(response.add);
    }); 

};

function engineerInfo() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is their name?',
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
    ])
    .then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        const template = 
        `<div class="card">
            <div class="card-body">
                <h4 class="card-title">ENGINEER</h4>
                <h5 class="name">${engineer.name}</h5>
                <h5 class="employeeID">ID: ${engineer.id}</h5>
                <address>
                    <a href="mailto:${engineer.email}">${engineer.email}</a>
                </address>
                <a class="github" target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a>
            </div>
        </div>`
        templateArray.push(template);
        nextTeamMember(response.add);
    }); 
};

function internInfo () {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is their name?'
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
    ])
    .then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        const template = 
        `<div class="card">
            <div class="card-body">
                <h4 class="card-title">INTERN</h4>
                <h5 class="name">${intern.name}</h5>
                <h5 class="employeeID">ID: ${intern.id}</h5>
                <address>
                    <a class="email" href="mailto:${intern.email}">${intern.email}</a>
                </address>
                <h5 class="school">${intern.school}</h5>
            </div>
        </div>`
        templateArray.push(template);
        nextTeamMember(response.add);
    }); 
};

function nextTeamMember (response) {
    switch (response) {
        case 'Add Engineer':
            engineerInfo();
            break;
        case 'Add Intern':
            internInfo ();
            break;
        case 'No more team members':
            addToTemplate();
            break;
    };
}

managerInfo ()