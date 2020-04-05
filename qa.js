var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "project",
        message: "What is the name of your project?" 
    },
])

fs.writeFile();