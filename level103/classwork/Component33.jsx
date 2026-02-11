import { useContext } from "react";
import { NameContext } from "./NameContext";

const Component33 = () => {
    const name = useContext(NameContext);

    return (
        <div>
            <h3>Component 3</h3>
            <h2>Name from App: {name}</h2>
        </div>
    );
};

export default Component33;
