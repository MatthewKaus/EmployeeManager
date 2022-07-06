const inquire = require('inquirer');
const fs = require('fs')
const { mainMenuQuestions, internQuestions, managerQuestions, engineerQuestions } = require('./src/questions');

const Intern = require('./lib/Intern.js')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js');

const employeeArray = []

const mainMenu = () => {
    inquire.prompt(mainMenuQuestions).then(answers => {
        switch (answers.menu) {
            case 'Add Intern': addIntern(); break;
            case 'Add Manager': addManager(); break;
            case 'Add Engineer': addEngineer(); break;
            case 'Finished': finished(); break;
        }
    })
};

const addIntern = () => {
    inquire.prompt(internQuestions).then(answers => {
        const intern = new Intern(answers.intern, answers.id, answers.email, answers.school)
        employeeArray.push(intern)
        mainMenu();
    })
}

const addEngineer = () => {
    inquire.prompt(engineerQuestions).then(answers => {
        const engineer = new Engineer(answers.engineer, answers.id, answers.email, answers.github)
        employeeArray.push(engineer)
        mainMenu();
    })
};

const addManager = () => {
    inquire.prompt(managerQuestions).then(answers => {
        const manager = new Manager(answers.manager, answers.id, answers.email, answers.office)
        employeeArray.push(manager)
        mainMenu();
    })
}

const finished = () => {
    console.log(employeeArray)
}

mainMenu()