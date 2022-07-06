const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generator.js')

const { mainMenuQuestions, internQuestions, managerQuestions, engineerQuestions } = require('./src/questions');
const { Intern, Manager, Engineer } = require('./lib/index.js')

const employeeArray = []

const mainMenu = () => {
    inquirer.prompt(mainMenuQuestions).then(answers => {
        switch (answers.menu) {
            case 'Add Intern': addIntern(); break;
            case 'Add Manager': addManager(); break;
            case 'Add Engineer': addEngineer(); break;
            case 'Finished': finished(); break;
        }
    })
};

const addIntern = () => {
    inquirer.prompt(internQuestions).then(answers => {
        const intern = new Intern(answers.intern, answers.id, answers.email, answers.school)
        employeeArray.push(intern)
        mainMenu();
    })
}

const addEngineer = () => {
    inquirer.prompt(engineerQuestions).then(answers => {
        const engineer = new Engineer(answers.engineer, answers.id, answers.email, answers.github)
        employeeArray.push(engineer)
        mainMenu();
    })
};

const addManager = () => {
    inquirer.prompt(managerQuestions).then(answers => {
        const manager = new Manager(answers.manager, answers.id, answers.email, answers.office)
        employeeArray.push(manager)
        mainMenu();
    })
}

const finished = () => {
    console.log(employeeArray)
}

mainMenu()