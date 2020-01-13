function greeter2(Person) {
    return "Hello, " + Person.firstName + " " + Person.lastName;
}
var user1 = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter2(user1);
