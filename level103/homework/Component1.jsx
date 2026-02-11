
import Component2 from "./Component2";

function Component1({ user }) {
    return (
        <div>
            <Component2 user={user} />
        </div>
    );
}

export default Component1;
