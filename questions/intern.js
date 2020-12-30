const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
        validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "Name field must be filled out"
        }
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?",
        validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "Email field must be filled out"
        }
    },
    {
        type: "input",
        name: "internId",
        message: "What is the intern's ID number?",
        validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "ID field must be filled out"
        }
    },
    {
        type: "input",
        name: "internSchool",
        message: "What is the intern's school?",
        validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "School field must be filled out"
        }
    },
]

module.exports = internQuestions;