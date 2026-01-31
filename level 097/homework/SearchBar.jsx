function SearchBar({ onSearch }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(e.target.name.value);
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Search books..."
                required
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;
