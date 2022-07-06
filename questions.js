const mainMenuQuestions = [
    {
        type: 'list',
        name: 'menu',
        message: 'What would you to do?',
        choices: ['Add Intern', 'Add Manager', 'Add Engineer', 'Finished']
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'intern',
        message: 'What is this interns name?',
    },
    {
        type: 'number',
        name: 'id',
        message: 'What is this interns ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is this interns email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is is this interns school'
    },
];

const managerQuestions = [
    {
        type: 'input',
        name: 'manager',
        message: 'What is the Managers name?',
    },
    {
        type: 'number',
        name: 'id',
        message: 'What is this Mangers ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is this managers email?',
    },
    {
        type: 'number',
        name: 'office',
        message: 'What is this Managers office number?',
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineer',
        message: 'What is this Engineers name?'
    },
    {
        type: 'number',
        name: 'id',
        message: 'What is this Engineers ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is this Engineers email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is this Engineers GitHub account?'
    },
];

module.exports = { mainMenuQuestions, internQuestions, managerQuestions, engineerQuestions };