const internCard = internData => {
    if (!internData) {
        return ''
    } else {
        let allInterns = ''
        internData.forEach(element => {
            allInterns = allInterns + `
            <div class="four columns">
                <div class=>
                    <h2>Intern</h1>
                        <img src='./assets/imgs/Legosi-png.png' style='width: 150px; align-self: center;' />
                        <div>
                            <ul class="table">
                                <li>Name: ${element.name}</li>
                                <li>ID: ${element.id}</li>
                                <li>Email: ${element.email}</li>
                                <li>School: ${element.school}</li>
                            </ul>
                        </div>
                </div>
            </div>
            `
        });
        return allInterns;
    }
}

const engineerCard = engineerData => {
    if (!engineerData) {
        return ''
    } else {
        let allEngineers = ''
        engineerData.forEach(element => {
            allEngineers = allEngineers + `
            <div class="four columns">
                <div class=>
                    <h2>Intern</h1>
                        <img src='./assets/imgs/Legosi-png.png' style='width: 150px; align-self: center;' />
                        <div>
                            <ul class="table">
                                <li>Name: ${element.name}</li>
                                <li>ID: ${element.id}</li>
                                <li>Email: ${element.email}</li>
                                <li>Gihub: ${element.github}</li>
                            </ul>
                        </div>
                </div>
            </div>
            `
        })
        return allEngineers;
    }
}

const managerCard = managerData => {
    if (!managerData) {
        return ''
    } else {
        let allManagers = ''
        managerData.forEach(element => {
            allManagers = allManagers + `
            <div class="four columns">
                <div class=>
                    <h2>Intern</h1>
                        <img src='./assets/imgs/Legosi-png.png' style='width: 150px; align-self: center;' />
                        <div>
                            <ul class="table">
                                <li>Name: ${element.name}</li>
                                <li>ID: ${element.id}</li>
                                <li>Email: ${element.email}</li>
                                <li>Office: ${element.office}</li>
                            </ul>
                        </div>
                </div>
            </div>
            `
        })
        return allManagers;
    }
}
const generateHtml = employees => {
    return `
    <!DOCTYPE html>
    <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./style.css" />
            <title>Generated Page</title>
        </head>
        <body>
            <header class=''>
                <h1>Employee Manager</h1>
            </header>
            <section class="container">
                ${employees}
            </section>
        </body>
    </html>
    `
}

module.exports = { internCard, engineerCard, managerCard, generateHtml }