
// აჩვენებს დამატებით ინფორმაციას UI-ში
function Info() {
    const info = "This is some info about React.";

    return (
        <section>
            {/* JSX-ში JavaScript შეიძლება ჩავწეროთ {}-ში */}
            <p>{info}</p>
            {/* Event handling JSX-ში */}
            <button onClick={() => console.log("Info button clicked")}>
                Click me
            </button>
        </section>
    );
}

export default Info;
