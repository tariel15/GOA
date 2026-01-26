function FormView({ value, onChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormView;
