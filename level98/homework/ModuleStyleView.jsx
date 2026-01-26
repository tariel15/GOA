import styles from "./Card.module.css";

function ModuleStyleView() {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>CSS Module Card</h2>
            <p className={styles.text}>
                ეს არის ტექსტი, გასტილული CSS Module-ის გამოყენებით
            </p>
            <button className={styles.button}>დაწკაპე</button>
        </div>
    );
}

export default ModuleStyleView;
