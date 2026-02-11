import { useState } from "react";
import Component11 from "./Component11";
import { NameContext } from "./NameContext";

const App = () => {
    const [name, setName] = useState("React Student");

    return (
        <NameContext.Provider value={name}>
            <h2>App Component: {name}</h2>
            <Component1 />
        </NameContext.Provider>
    );
};

export default App;
