//4) შექმენით UserContext context-ი.
//App.jsx-ში:
//- გააკეთეთ UserContext.Provider
//- value-ში გადაეცით user ობიექტი
//Component3-ში მიიღეთ მონაცემი useContext-ის გამოყენებით.
//კომენტარებში ახსენით:
//- რა პრობლემა მოგვარდა Context-ის გამოყენებით
// App.jsx
import { useState } from "react";
import Component1 from "./Component11";
import UserContext from "./UserContext";

function App2() {
    const [user, setUser] = useState({ name: "Luka", age: 20 });

    return (
        <UserContext.Provider value={user}>
            <Component1 />
        </UserContext.Provider>
    );
}

export default App2;
