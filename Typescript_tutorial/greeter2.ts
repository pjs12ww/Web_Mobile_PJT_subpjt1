interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
    
}

let user1 = { firstName: "Jane", lastName: "User"};

document.body.innerHTML = greeter2(user1);