import styles from "./MixedStyles.module.css";

function MixedStylesView({ title, text }) {
    const inlineStyle = {
        color: "white",
        backgroundColor: "#1e293b",
        padding: "10px",
        textAlign: "center"
    };

    return (
        <div className="flex justify-center mt-10">
            {/* TAILWIND CSS */}
            <div className="bg-gray-100 p-6 rounded-xl w-96">

                {/* CSS MODULE */}
                <h2 className={styles.title}>
                    {title}
                </h2>

                {/* INLINE STYLE */}
                <p style={inlineStyle}>
                    {text}
                </p>

                {/* TAILWIND CSS */}
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                    ღილაკი
                </button>
            </div>
        </div>
    );
}

export default MixedStylesView;
