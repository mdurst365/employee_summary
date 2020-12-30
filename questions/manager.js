const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
        validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "Name field must be filled out"
        }
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?",
        validate: (answer) => {
            if(answer !== "") {
                return true
            } 
            return "Email field must be filled out"
        }
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the manager's ID number?",
        validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "ID field must be filled out"
        }
    },
    {
        type: "input",
        name: "managerOffice",
        message: "What is the manager's office number?",
        validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "ID field must be filled out"
        }
    },
]

module.exports = managerQuestions;