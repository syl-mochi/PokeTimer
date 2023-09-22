import styles from "./App.module.css";

import Countdown from "./components/Countdown/Countdown";

function App() {
    return (
        <>
            <div className={styles.example}>Pretend there is Squirtle</div>
            <Countdown />
        </>
    );
}

export default App;
