const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
require("dotenv").config()
const token = process.env.TOKEN;

//Readme questions
function questions() {
    inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to the project?"
    },
    {
        type: "input",
        name: "technologies",
        message: "What coding technologies were used in creating the project?"
    },
    {
        type: "input",
        name: "about",
        message: "Describe what the project does."
    },
    {
        type: "input",
        name: "license",
        message: "What is the license for the project?"
        },

    {
        type: "input",
        name: "install",
        message: "How does a user install the project?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",  
    },
])
}