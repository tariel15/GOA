function ToggleView({ isOn, onToggle }) {
    return (
        <div>
            <p>{isOn ? "ON" : "OFF"}</p>
            <button onClick={onToggle}>
                Toggle
            </button>
        </div>
    );
}

export default ToggleView;
