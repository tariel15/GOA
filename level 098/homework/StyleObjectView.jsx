function StyleObjectView({ titleStyle, boxStyle, textStyle }) {
    return (
        <>
            {/* სხვადასხვა style ობიექტი სხვადასხვა ელემენტზე */}
            <h2 style={titleStyle}>Style Object Example</h2>

            <div style={boxStyle}>
                <p style={textStyle}>
                    ეს ტექსტი გასტილულია JavaScript style ობიექტით
                </p>
            </div>
        </>
    );
}

export default StyleObjectView;
