
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export default User;
export function getUserName(user, element) {
    element.innerHTML += `User Name: ${user.name}<br>`;
}

export function getUserAge(user, element) {
    element.innerHTML += `User Age: ${user.age}<br>`;
}
