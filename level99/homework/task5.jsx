//6) შექმენით Button კომპონენტი, რომელიც მიიღებს props-ით onClick ფუნქციას.App.jsx-ში გამოიყენეთ ეს ღილაკი uncontrolled input-ის მნიშვნელობის წამოსაღებად.კომენტარებში დაწერეთ როგორ ვიღებთ მონაცემს uncontrolled კომპონენტიდან
import { useRef } from "react";
import Button from "./Button";

function App() {
    // username არის uncontrolled input  მისი მნიშვნელობა ინახება DOM-ში
    const usernameRef = useRef(null);

    const handleClick = () => {
        // uncontrolled input-ის მნიშვნელობას ვიღებთ ref.current.value-ით
        const username = usernameRef.current.value;
        console.log(username);
    };

    return (
        <>
            {/* 
        Uncontrolled input
        არ აქვს value და onChange
        მნიშვნელობას ინახავს DOM
      */}
            <input
                type="text"
                placeholder="Username"
                ref={usernameRef}
            />

            {/* 
        Button იღებს onClick ფუნქციას props-ით
        ღილაკზე დაჭერისას ვკითხულობთ DOM-იდან მონაცემს
      */}
            <Button onClick={handleClick} />
        </>
    );
}

export default App;
