
import styles from "./Message.module.css";

function Message() {
    return (
        <div>
            {/* Modular CSS */}
            <p className={styles.text}>
                This paragraph is styled using CSS Module
            </p>
        </div>
    );
}

export default Message;
