import React from "react";
import styles from "./Button.module.css";

function Button({ action, children }) {
    return (
        <button className={styles.button} onClick={action}>
            {children}
        </button>
    );
}

export default Button;
