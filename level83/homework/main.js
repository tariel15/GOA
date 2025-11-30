
import User, { getUserName, getUserAge } from './user.js';

const output = document.getElementById("output");
const user1 = new User("Ana", 25);
const user2 = new User("Giorgi", 30);
getUserName(user1, output);
getUserAge(user1, output);

getUserName(user2, output);
getUserAge(user2, output);
