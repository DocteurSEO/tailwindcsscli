#! /usr/bin/env node

const inquirer = require('inquirer');
const shell = require('shelljs');
const chalk = require('chalk');
const { createSpinner } = require('nanospinner') ;
const chalkAnimation = require('chalk-animation');

const path = process.cwd();

const { questions } = require('./utils/questions.js');
 



 

inquirer.prompt(questions).then((answers) => {

    shell.exec(`mkdir ${answers.projectName}`);

    
    
   

    console.log(chalk.bgMagenta("📁 Created a folder for the project"))
    shell.exec(
        `git clone https://github.com/DocteurSEO/express-api-starter ${answers.projectName}`
    );
    
    shell.cd(`${path}/${answers.projectName}`);

    console.log(chalk.bgYellow(`🛠 Installing all dependencies`))
    shell.exec(`npm i`);
     
    console.log(
        chalk.bgGreen('✔ Successfully installed all the required dependencies\nHappy hacking 🚀')
    );

});