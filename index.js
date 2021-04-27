const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
let teamMembers = [];
var html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile</title>
</head>
<body>
    
<header class="card-panel red accent-2 white-text" id="main-header">
    <h4>My Team</h4>
</header>

<div class="row" id="card-container">`;

const managerQuestions = [
  {
    type: "input",
    message: "Manager name:",
    name: "managerName",
  },
  {
    type: "input",
    message: "Manager ID:",
    name: "managerID",
  },
  {
    type: "input",
    message: "Manager email:",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Manager office number:",
    name: "managerOffice",
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: "Engineer name:",
    name: "engineerName",
  },
  {
    type: "input",
    message: "Engineer ID:",
    name: "engineerID",
  },
  {
    type: "input",
    message: "Engineer email:",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "Engineer GitHub username:",
    name: "engineerGithub",
  },
];
const internQuestions = [
  {
    type: "input",
    message: "Intern name:",
    name: "internName",
  },
  {
    type: "input",
    message: "Intern ID:",
    name: "internID",
  },
  {
    type: "input",
    message: "Intern email:",
    name: "internEmail",
  },
  {
    type: "input",
    message: "Intern school:",
    name: "internSchool",
  },
];
const addMemberQuestion = [
  {
    type: "confirm",
    message: "Add another team member?",
    name: "addMember",
  },
];
const memberTypeQuestion = [
  {
    type: "list",
    choices: ["Intern", "Engineer"],
    message: "What type of member would you like to add to your team?",
    name: "newMemberType",
  },
];

function newManager() {
  console.log("----- Please enter Manager details -----");
  inquirer.prompt(managerQuestions).then((response) => {
    let manager = new Manager(
      response.managerName,
      response.managerID,
      response.managerEmail,
      response.managerOffice
    );
    teamMembers.push(manager);
    html += `
    <div class="col s6 m3 grey lighten-4 z-depth-3">
    <div class="card blue">
      <div class="card-content white-text">
        <span class="card-title">${response.managerName}</span>
        <span class="card-title">Manager</span>
      </div>
    </div>
    <ul class="collection" id="info">
      <li class="collection-item">ID: ${response.managerID}</li>
      <li class="collection-item">Email: <a href="${response.managerEmail}" target="_blank">${response.managerEmail}</a>
      <li class="collection-item">Office ID: ${response.managerOffice}</li>
    </ul>
  </div>
    `;

    addNext();
  });
}

function addNext() {
  if (teamMembers.length < 5) {
    inquirer.prompt(addMemberQuestion).then((response) => {
      if (response.addMember == true) {
        chooseNext();
      } else {
        exit();
      }
    });
  } else {
    console.log("Maximum team size is 5 members");
    exit();
  }
}

function chooseNext() {
  inquirer.prompt(memberTypeQuestion).then((response) => {
    let type = response.newMemberType;
    if (type == "Intern") {
      newIntern();
    } else {
      newEngineer();
    }
  });
}

function newEngineer() {
  console.log("----- Please enter Engineer details -----");
  inquirer.prompt(engineerQuestions).then((response) => {
    let engineer = new Engineer(
      response.engineerName,
      response.engineerID,
      response.engineerEmail,
      response.engineerGithub
    );
    teamMembers.push(engineer);
    html += `
    <div class="col s6 m3 grey lighten-4 z-depth-3">
    <div class="card blue">
      <div class="card-content white-text">
        <span class="card-title">${response.engineerName}</span>
        <span class="card-title">Engineer</span>
      </div>
    </div>
    <ul class="collection" id="info">
      <li class="collection-item">ID: ${response.engineerID}</li>
      <li class="collection-item">Email: <a href="${response.engineerEmail}" target="_blank">${response.engineerEmail}</a>
      <li class="collection-item">GitHub: <a href="https://github.com/${response.engineerGithub}" target="_blank">${response.engineerGithub}</li>
    </ul>
  </div>
    `
    console.log(teamMembers);
    addNext();
  });
}

function newIntern() {
  console.log("----- Please enter Intern details -----");
  inquirer.prompt(internQuestions).then((response) => {
    let intern = new Intern(
      response.internName,
      response.internID,
      response.internEmail,
      response.internSchool
    );
    teamMembers.push(intern);
    console.log(response);
    html += `
    <div class="col s6 m3 grey lighten-4 z-depth-3">
    <div class="card blue">
      <div class="card-content white-text">
        <span class="card-title">${response.internName}</span>
        <span class="card-title">Intern</span>
      </div>
    </div>
    <ul class="collection" id="info">
      <li class="collection-item">ID: ${response.internID}</li>
      <li class="collection-item">Email: <a href="${response.internEmail}" target="_blank">${response.internEmail}</a>
      <li class="collection-item">School: <a href="https://github.com/${response.engineerGithub}" target="_blank">${response.Github}</li>
    </ul>
  </div>
    `
    addNext();
  });
}

function init() {
  newManager();
}

function exit() {
  console.log(teamMembers);
  html += `
  </div>

  </body>
  </html>
  `
  fs.writeFile("./dist/newindex.html", html, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

init();
