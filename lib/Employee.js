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

getID () {
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