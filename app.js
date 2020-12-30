const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const engineerQuestions = require("./questions/engineer.js")
const internQuestions = require("./questions/intern.js")
const managerQuestions = require("./questions/manager.js")
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employees = [];

function addMember() {
    console.log("Add as many employees as you need to, then select finished when done to exit")
    inquirer.prompt([{
        type: "list",
        name: "teamMember",
        message: "What type of team member would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "Finished"]
    }]).then(answer => {
        switch (answer.teamMember) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam()
        }

    })
    //switch statement
   
    
}

function buildTeam () {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employees), "utf-8")
}


function addManager() {
    inquirer.prompt(managerQuestions)
        .then(response => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber)
            employees.push(manager) 
            addMember()
        })
}

function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(response => {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
        employees.push(engineer) 
        addMember()
    })
}

function addIntern() {
    inquirer.prompt(internQuestions)
    .then(response => {
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
        employees.push(intern) 
        addMember()
    })
}

addMember();



