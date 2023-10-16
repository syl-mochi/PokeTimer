import React from "react";
import axios from "axios";
import styles from "./App.module.css";

import Countdown from "./components/Countdown/Countdown";
import Button from "./components/Button/Button";
import Landscape from "./components/Landscape/Landscape";

const getPokemonByID = "http://localhost:5000/getPokemon?id=";

function App() {
    return (
        <>
            <div className={styles.example}>Pretend there is Squirtle</div>
            <Countdown />

            <Landscape
                text={
                    "Who's that pokemon? testing a fucking larger text idk what to write here"
                }
                sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png"
            />

            <Button>Start</Button>
            <Button>Reset</Button>

            <button
                type="button"
                onClick={() =>
                    getCompanionJSON(179).then((res) => console.log(res))
                }
            >
                mareep
            </button>
        </>
    );
}

async function getCompanionJSON(id) {
    let companionJSON;
    await axios
        .get(getPokemonByID.concat(id))
        .then((res) => (companionJSON = res))
        .catch((error) => console.log(error.message));
    return companionJSON;
}

export default App;
