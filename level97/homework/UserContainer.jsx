//6) შექმენით UserContainer და UserView კომპონენტები.
//UserContainer-ში შეინახეთ state:
//- name
//- age
//UserView კომპონენტს props-ით გადასცით ეს მონაცემები.
//UserView-ში უნდა გამოჩნდეს ინფორმაცია ტექსტის სახით.
import { useState } from "react";
import UserView from "./UserView";

function UserContainer() {
    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState(25);

    return (
        <div>
            <UserView
                name={name}
                age={age}
            />
        </div>
    );
}

export default UserContainer;
