const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generator.js')
const { internCard, engineerCard, managerCard, generateHtml } = require('./utils/template')

const { mainMenuQuestions, internQuestions, managerQuestions, engineerQuestions } = require('./utils/questions');
const { Intern, Manager, Engineer } = require('./lib/index.js')

const internArray = []
const engineerArray = []
const managerArray = []

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
        const intern = new Intern(answers.intern, answers.id, answers.email, answers.school);
        internArray.push(intern);
        mainMenu();
    })
}

const addEngineer = () => {
    inquirer.prompt(engineerQuestions).then(answers => {
        const engineer = new Engineer(answers.engineer, answers.id, answers.email, answers.github);
        engineerArray.push(engineer);
        mainMenu();
    })
};

const addManager = () => {
    inquirer.prompt(managerQuestions).then(answers => {
        const manager = new Manager(answers.manager, answers.id, answers.email, answers.office);
        managerArray.push(manager);
        mainMenu();
    })
}

const finished = () => {
    const allInterns = internCard(internArray);
    const allEngineers = engineerCard(engineerArray);
    const allManagers = managerCard(managerArray);
    const allEmployees = allInterns + allEngineers + allManagers

    writeFile(generateHtml(allEmployees))
    copyFile()
    console.log('Printed, please look into the "./output" Directory for files')
}

mainMenu()