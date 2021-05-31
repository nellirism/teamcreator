// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require("path");
const inquirer = require("inquirer")
const fs = require("fs");
const engineerCard = require("./htmlRender/engineerCard");
const internCard = require("./htmlRender/internCard");
const managerCard = require("./htmlRender/managerCard");
const mainRender = require("./htmlRender/mainRender");


const outputPath = path.resolve(__dirname, "output", "team.html");

const teamMember = [];

function mainApp() {
    // create a manager
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the managers name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the managers id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the managers email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?"
            }
        ])
        .then(answers => {
            var { name, id, email, officeNumber } = answers;
            var manager = new Manager(name, id, email, officeNumber);
            
            //Adds the manager to the team array
            teamMember.push(manager);

            //Initiates the prompt to ask for more team members
            createTeam();
        })

}
// this function creates a list to add team-members
function createTeam() {

    inquirer
        .prompt([
        {
            type: "list",
            name: "command",
            message:"Would you like to add more team members?",
            choices:["Add an Engineer", "Add an Intern", "Make team"]
        }
        ])
        .then(answers => {
            // create a switch statement to choose between engineer, intern, or build team
            statement = answers.command;

            switch(statement){
                case "Add an Engineer":
                    getEngineer();
                    break;

                case "Add an Intern":
                    getIntern();
                    break;

                case "Make team":
                    buildTeam();
                    break;
            }
        })
}

// a function that create an engineer
function getEngineer() {

    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineers name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineers id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineers email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineers github username?"
            }

        ])
        .then(answers => {
            var {name, id, email, github} = answers;
            var engineer = new Engineer(name, id, email, github);
            teamMember.push(engineer);
            createTeam();
        })

}
// a function that create an intern
function getIntern() {

    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Interns name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the Interns id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the Interns email?"
            },
            {
                type: "input",
                name: "school",
                message: "What is the school name?"
            }

        ])
        .then(answers => {
            var {name, id, email, school} = answers;
            var intern = new Intern(name, id, email, school);
            teamMember.push(intern);
            createTeam();
        })

}

function buildTeam() {
    fs.writeFileSync(outputPath, mainRender(teamMember), "utf-8");
}

mainApp()