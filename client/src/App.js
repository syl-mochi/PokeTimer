import React from "react";
import axios from "axios";
import styles from "./App.module.css";

import Countdown from "./components/Countdown/Countdown";
import Button from "./components/Button/Button";

const getPokemonByID = "http://localhost:5000/getPokemon?id=";

function App() {
    return (
        <>
            <div className={styles.example}>Pretend there is Squirtle</div>
            <Countdown />

            <Button>Start</Button>
            <Button>Reset</Button>

            <button type="button" onClick={() => getCompanionJSON(179)}>
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

    console.log(companionJSON);
    return companionJSON;
}

export default App;
