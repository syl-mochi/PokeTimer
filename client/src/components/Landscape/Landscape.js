import React from "react";
import styles from "./Landscape.module.css";
import PokemonSprite from "../PokemonSprite/PokemonSprite";

// https://react.dev/learn/passing-props-to-a-component

function Landscape({ text, pokemonID }) {
    // const [id, setId] = useState(pokemonID);
    return (
        <section className={styles.landscape}>
            <p className={styles.textbox}>{text}</p>

            <PokemonSprite pokemonId={pokemonID} />
        </section>
    );
}
export default Landscape;
