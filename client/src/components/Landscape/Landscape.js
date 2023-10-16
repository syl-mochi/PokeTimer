import React from "react";
import styles from "./Landscape.module.css";

// https://react.dev/learn/passing-props-to-a-component

function Landscape({ text, sprite }) {
    return (
        <section className={styles.landscape}>
            <tbody>
                <td>
                    <p className={styles.textbox}>{text}</p>
                </td>
                <td>
                    <img
                        className={styles.sprite}
                        src={sprite}
                        alt="companion"
                    />
                </td>
            </tbody>
        </section>
    );
}
export default Landscape;
