
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
    
inquirer
.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "projectName"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description"
    },
    {
        type: "list",
        message: "What type of license should your project have?",
        name: "license",
        choices: ["MIT", "GNU", "Creative Commons", "BSD"]
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "command"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "what does the user need to know about contributing to the repo?",
        name: "contribution"
    }
])
.then(data => {
    fs.writeFile(`sampleREADME.md`, generateMarkdown(data), (err) => err ? console.error(err) : console.log('Success!'));
}) .catch(err => {
    console.log(err);
});

