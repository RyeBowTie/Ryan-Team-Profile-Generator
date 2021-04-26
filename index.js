const inquirer = require("inquirer")
const fs = require('fs');

const website1 = require('./src/HTML1');
const website2 = require('./src/HTML2')

const templateArray = [];

function addToTemplate () {
    const websiteArray = [website1, templateArray.join(''), website2]
    writeFile(websiteArray.join(''))
    
};

function writeFile(website) {
    
    fs.writeFile('./dist/index.html', website, (err) =>
    err ? console.error(err) : console.log('Success!') 
    );
}

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
        const template = 
        `<div class="card">
            <div class="card-body">
                <h4 class="card-title">MANAGER</h4>
                <h5 class="name">${response.name}</h5>
                <h5 class="employeeID">ID: ${response.id}</h5>
                <address>
                    <a href="mailto:${response.email}">${response.email}</a>
                </address>
                <h5 class="office">Office: ${response.office}</h5>
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
        const template = 
        `<div class="card">
            <div class="card-body">
                <h4 class="card-title">ENGINEER</h4>
                <h5 class="name">${response.name}</h5>
                <h5 class="employeeID">ID: ${response.id}</h5>
                <address>
                    <a href="mailto:${response.email}">${response.email}</a>
                </address>
                <a class="github" target="_blank" href="https://github.com/${response.github}">${response.github}</a>
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
        const template = 
        `<div class="card">
            <div class="card-body">
                <h4 class="card-title">INTERN</h4>
                <h5 class="name">${response.name}</h5>
                <h5 class="employeeID">ID: ${response.id}</h5>
                <address>
                    <a class="email" href="mailto:${response.email}">${response.email}</a>
                </address>
                <h5 class="school">${response.school}</h5>
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