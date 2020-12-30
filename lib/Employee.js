// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

// Get all of this information from the user  
getName () {
    return this.name;
}

getId () {
    return this.id;
}

getEmail () {
    return this.email;
}

// Except for the role, we already know this information
getRole () {
    return "Employee";
}

}

// export the information here
module.exports = Employee;