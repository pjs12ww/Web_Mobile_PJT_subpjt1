function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";
// 매개변수 type 을 지정하면서 error 발생
// let user = [0, 1, 2];

document.body.textContent = greeter(user)