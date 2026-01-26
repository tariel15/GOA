import "./styles.css";

function StylesheetView({ title, description }) {
    return (
        <div className="container">
            {/* პირველი styled ელემენტი */}
            <h2 className="title">{title}</h2>

            {/* მეორე styled ელემენტი */}
            <p className="text">{description}</p>
        </div>
    );
}

export default StylesheetView;
