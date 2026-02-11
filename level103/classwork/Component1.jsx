import Component2 from "./Component2";

const Component1 = ({ name }) => {
    return (
        <div>
            <h1>Component 1</h1>
            <Component2 name={name} />
        </div>
    );
};

export default Component1;
