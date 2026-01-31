//2) შექმენით რაიმე div 2 სათაურაით: პირველში ეწერება inline styling ხოლო მეორეში object variable styling. პირველ ელემენტს მიანიჭეთ ღია მწვანე ფონის ფერად და მუქი წვანე ტექსტის ფერად inline გასტვილის გზით, ხოლო მეორე ობიექტის გასტილვის გზით.
function StylingExample() {
    const headingStyle = {
        backgroundColor: "lightgreen",
        color: "darkgreen",
        padding: "10px",
        marginTop: "10px"
    };

    return (
        <div>
            {/* Inline styling */}
            <h1
                style={{
                    backgroundColor: "lightgreen",
                    color: "darkgreen",
                    padding: "10px"
                }}
            >
                Inline styling
            </h1>

            {/* Object variable styling */}
            <h1 style={headingStyle}>
                Object variable styling
            </h1>
        </div>
    );
}

export default StylingExample;
