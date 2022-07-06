const inquire = require('inquirer');
const fs = require('fs')
const { mainMenuQuestions, internQuestions, managerQuestions, engineerQuestions } = require('./src/questions');

const  Intern = require('./lib/Intern.js')
const  Manager = require('./lib/Manager.js')
const  Engineer = require('./lib/Engineer.js')

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
        console.log(answers);
        mainMenu();
    })
}

const addEngineer = () => {
    inquire.prompt(engineerQuestions).then(answers => {
        console.log(answers);
        mainMenu();
    })
};

const addManager = () => {
    inquire.prompt(managerQuestions).then(answers => {
        console.log(answers);
        mainMenu();
    })
}

const finished = () => {
    return ''
}

mainMenu()