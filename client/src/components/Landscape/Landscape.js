import React from "react";
import styles from "./Landscape.module.css";

// https://react.dev/learn/passing-props-to-a-component

function Landscape({ text, sprite }) {
    return (
        <section className={styles.landscape}>
            <p className={styles.textbox}>{text}</p>
            <img className={styles.sprite} src={sprite} alt="companion" />
        </section>
    );
}
export default Landscape;
