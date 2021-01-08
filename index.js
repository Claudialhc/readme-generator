// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = ["What is your Github username", "What is your email address", 
"What is your project's name", "Please write a short description of your project",
"What kind of license should your project have?", 
"What command should be run to install dependencies?", "What command should be run to run tests", 
"What does the user need to know about using the repo?", 
"What does the user need to know about contributing to the repo?"]
    
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
        name: "Email"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "Project Name"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "Description"
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
        name: "Command"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "Usage"
    },
    {
        type: "input",
        name: "what does the user need to know about contributing to the repo?",
        name: "Contributions"
    }
])
.then((response) =>
    console.log("You Got It Dude!")
);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// ## have done before
// - use fs module to create readme file
// - use template literals to inesrt user input into readme string
// - reference good readme for a template
// ## need to learn
// - use inquirer package to get user input (thursday)
// - create a .gitignore file (on your own/office hours)
// - create package.json file (thursday)
// - how to make a video that captures screen and voice (on your own/pre-work)
// - learn what a badge is and how to render one in markdown (on your own/office hours)