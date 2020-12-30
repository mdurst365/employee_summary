const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's name?",
        validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "Name field must be filled out"
        }
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineer's email?",
        validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "Email field must be filled out"
        }
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the Engineer's ID number?",
        validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "ID field must be filled out"
        }
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is the Engineer's github?",
        validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "Github field must be filled out"
        }
    },
]

module.exports = engineerQuestions;