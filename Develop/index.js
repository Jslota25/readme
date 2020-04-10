const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require('axios');
require('dotenv').config();

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

//Pulls user's Github username
.then(function(answers) {
    let username = answers.username;
    getUser(username, answers);
});

//API Call
function getUser(username, answers) {
    axios
    .get(`https://api.github.com/users/${username}`, 
    {
      headers: {"Authorization": `token ${process.env.GH_TOKEN}`}
    })
      .then(function(res) {
          const data = res.data
        generateReadme(data, answers);
        }) 
        .catch(error => console.log(error))
    }

}