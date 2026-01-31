//2) ახსენთ რას ნიშნავს controlled და uncontrolled კომპონენტები
function ControlledInput() {
    const [value, setValue] = React.useState("");

    return (
        <input
            type="text"
            value={value}              // value მოდის state-დან
            onChange={(e) => setValue(e.target.value)} // state იცვლება აქ
        />
    );
}
