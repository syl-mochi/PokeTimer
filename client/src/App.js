import React, { useState } from "react";
import styles from "./App.module.css";

import Countdown from "./components/Countdown/Countdown";
import Button from "./components/Button/Button";
import Landscape from "./components/Landscape/Landscape";

const pokemonID = 179;

function App() {
    const [id, setId] = useState(pokemonID);

    return (
        <>
            <div className={styles.example}>Pretend there is Squirtle</div>

            <Countdown />

            <Landscape
                text={
                    "Who's that pokemon? Testing a larger text idk what to write here. Mareep is looking at you fondly."
                }
                pokemonID={id}
            />

            <Button>Start</Button>
            <Button>Reset</Button>

            <button
                type="button"
                onClick={() => setId(Math.floor(Math.random() * 1017 + 1))}
            >
                Random Pokemon
            </button>
        </>
    );
}

export default App;
