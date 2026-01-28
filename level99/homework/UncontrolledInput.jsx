function UncontrolledInput() {
    const inputRef = React.useRef();

    const handleClick = () => {
        console.log(inputRef.current.value); // ვკითხულობთ DOM-იდან
    };

    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Get Value</button>
        </>
    );
}
