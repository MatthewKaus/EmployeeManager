const mainMenuQuestions = [
    {
        type: 'list',
        name: 'menu',
        message: 'What would you to do?',
        choices: ['Add Intern', 'Add Manager', 'Add Engineer', 'Finished']
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'intern',
        message: 'What is this interns name?',
        validate: (answer) => {
            if (!answer) {
                console.log('Please enter a name!');
                return false;
            } else {
                return true
            }
        },
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is this interns ID?',
        validate: (answer) => {
            if (isNaN(answer)) {
                console.log('Please enter a Number!');
                return false;
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is this interns email?',
        validate: (answer) => {
            if (!answer) {
                console.log('Please enter an email!');
                return false;
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is is this interns school',
        validate: (answer) => {
            if (!answer) {
                console.log('Please enter the school name!');
                return false;
            } else {
                return true;
            }
        },
    },
];

const managerQuestions = [
    {
        type: 'input',
        name: 'manager',
        message: 'What is the Managers name?',
        validate: (answer) => {
            if (!answer) {
                console.log('Please enter a name!');
                return false;
            } else {
                return true
            }
        },
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is this managers ID?',
        validate: (answer) => {
            if (isNaN(answer)) {
                console.log('Please enter a Number!');
                return false;
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is this managers email?',
        validate: (answer) => {
            if (!answer) {
                console.log('Please enter an email!');
                return false;
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is this Managers office number?',
        validate: (answer) => {
            if (isNaN(answer)) {
                console.log('Please enter the office number!');
                return false;
            } else {
                return true;
            }
        },
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineer',
        message: 'What is this Engineers name?',
        validate: (answer) => {
            if (!answer) {
                console.log('Please enter a name!');
                return false;
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is this Engineers ID?',
        validate: (answer) => {
            if (isNaN(answer)) {
                return 'Please enter a Number!';
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is this Engineers email?',
        validate: (answer) => {
            if (!answer) {
                console.log('Please enter an email!');
                return false;
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is this Engineers GitHub account?',
        validate: (answer) => {
            if (!answer) {
                console.log('Please enter a GitHub account!');
                return false;
            } else {
                return true;
            }
        },
    },
];

module.exports = { mainMenuQuestions, internQuestions, managerQuestions, engineerQuestions };