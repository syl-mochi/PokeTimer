import express from "express";
import * as api from "./api.js";

// need cors to allow IP to pass
import cors from "cors";

const app = express();

// note that server runs on LH:5000

// https://expressjs.com/en/resources/middleware/cors.html
app.use(cors());

app.get("/", (req, res) => {
    res.send("dis is where it starts :v");
});

/** Give the pokemon data(id, name, sprite) of the associated given id in JSON*/
app.get("/getPokemon", async (req, res) => {
    var companion = await api.getPokemon(req.query.id);
    var companionJSON = JSON.stringify(companion);
    res.send(companionJSON);
});

app.get("/getPokemonName", (req, res) => {
    res.send("plain-text string data from JSON");
});

app.get("/getPokemonPNG", (req, res) => {
    res.send("plain-text string data from JSON");
});

export default app;

const main = async () => {
    // let mareep = await api.getPokemon("mareep");
    // console.log(mareep["name"]);
    // console.log(mareep["id"]);
    // console.log(mareep["sprite"]);
};

main();
