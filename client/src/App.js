import styles from "./App.module.css";
import Countdown from "./components/Countdown/Countdown";
import axios from "axios";

const getPokemonByID = "http://localhost:5000/getPokemon?id=";

function App() {
    return (
        <>
            <div className={styles.example}>Pretend there is Squirtle</div>
            <Countdown />

            <button type="button" onClick={getCompanionJSON(179)}>
                mareep
            </button>
        </>
    );
}

function getCompanionJSON(id) {
    var companionJSON = async () =>
        await axios
            .get(getPokemonByID.concat(id))
            .then((res) => console.log(res))
            .catch((err) => console.log(err.message));
    return companionJSON;
}

export default App;
