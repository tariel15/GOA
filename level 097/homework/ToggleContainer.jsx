//4) შექმენით ToggleContainer და ToggleView კომპონენტები.
//ToggleContainer-ში state-ში შეინახეთ boolean მნიშვნელობა.
//შექმენით ფუნქცია, რომელიც ცვლის მნიშვნელობას (true / false).
//ToggleView-ში props-ით მიღებული მნიშვნელობის მიხედვით:
//- გამოჩნდეს ტექსტი "ON" ან "OFF"
//- ღილაკზე დაჭერისას გამოიძახოს გადმოცემული ფუნქცია
import { useState } from "react";
import ToggleView from "./ToggleView";

function ToggleContainer() {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(prev => !prev);
    };

    return (
        <div>
            <ToggleView
                isOn={isOn}
                onToggle={toggle}
            />
        </div>
    );
}

export default ToggleContainer;
