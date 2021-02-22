// Variable Declarations
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Question array to prompt user additions

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your App title?"
    },
    {
        type: "input",
        name: "badge",
        message: "Please input the link of the specific badge you'd like to use"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe what your application's purpose is"
    },
    {
        type: "input",
        name: "installation",
        message: "What prerequisites do you need to run the app?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who was involved with the development of this app?"
    },
    {
        type: "input",
        name: "test",
        message: "What are the instructions to test the app?"
    },
    {
        type: "input",
        name: "username",
        message: "What's your username for Github?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    },
    {
        type: "input",
        name: "questions",
        message: "Give instructions on how to reach you for any more questions"
    }
];

// create readme file
function writeFile(fileName, data) {
    //join path node.js with filename to write datafile
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    //prompt user questions from array
    inquirer.prompt(questions)
        //call function afterwards
        .then((inqResponse) => {
            //call function for writing readme and generatemarkdown as params
            writeToFile("README.md", generateMarkdown({ ...inqResponse }))
        })
        //log succession after calling function when readme generates
        .then(() => console.log("Success!!!"))
        .catch((err) => console.log(err))
}

//initialize
init()
