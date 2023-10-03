import styles from "./App.module.css";
import Countdown from "./components/Countdown/Countdown";
import axios from "axios";

const getPokemonByID = "http://localhost:5000/getPokemon?id=";

function App() {
    return (
        <>
            <div className={styles.example}>Pretend there is Squirtle</div>
            <Countdown />

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
