
import { useContext } from "react";
import UserContext from "./UserContext";

function Component33() {
    const user = useContext(UserContext);

    return (
        <div>
            <h2>Name: {user.name}</h2>
            <h3>Age: {user.age}</h3>
        </div>
    );
}

export default Component33;
