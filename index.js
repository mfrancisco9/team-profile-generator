const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
let teamMembers = [];

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
exit();}};

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
    addNext();
  });
}

function init() {
    newManager();
}

function exit() {
    console.log(teamMembers)
}   


init();


// fs.writeFile(./dist/index.html, )

// function generateHtml(data) {
//     console.log(data)
// }
