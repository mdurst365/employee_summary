const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
        validate: (answer) => {
            if(answer !== "") {
                return true
            }
            return "Please do not leave any blank fields"
        }
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the manager's ID number?"
    },
    {
        type: "input",
        name: "managerOffice",
        message: "What is the manager's office number?"
    },
]

module.exports = managerQuestions;