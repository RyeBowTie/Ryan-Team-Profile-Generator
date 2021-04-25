const inquirer = require("inquirer")
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager")

const objectArray = [];

function addToTemplate () {
    console.log(objectArray.join(','))
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
        const manage = new Manager(response.name, response.id, response.email, response.office);
        
        const template = 
        `<div class="col-sm-12  col-m-6 col-lg-3">
            <div class="card">
                <div class="card-body">
                        <h5 class="card-title">Manager</h5>
                        <h5 class="name">${response.name}</h5>
                        <h5 class="employeeID">${response.id}</h5>
                        <h5 class="email">${response.email}</h5>
                        <h5 class="office">${response.office}</h5>
                    </div>
                </div>
            </div>`
        objectArray.push(template);
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
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        const template = 
        `<div class="col-sm-12  col-m-6 col-lg-3">
            <div class="card">
                <div class="card-body">
                        <h5 class="card-title">Manager</h5>
                        <h5 class="name">${response.name}</h5>
                        <h5 class="employeeID">${response.id}</h5>
                        <h5 class="email">${response.email}</h5>
                        <h5 class="office">${response.office}</h5>
                    </div>
                </div>
            </div>`
        objectArray.push(template);
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
        const intern = new Intern(response.name, response.id, response.email, response.school);
        
        const template = 
        `<div class="col-sm-12  col-m-6 col-lg-3">
            <div class="card">
                <div class="card-body">
                        <h5 class="card-title">Manager</h5>
                        <h5 class="name">${response.name}</h5>
                        <h5 class="employeeID">${response.id}</h5>
                        <h5 class="email">${response.email}</h5>
                        <h5 class="office">${response.office}</h5>
                    </div>
                </div>
            </div>`
            objectArray.push(template);
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