import axios from "axios";

export async function getCompanionJSON(id) {
    let companionJSON;
    await axios
        .get(`http://localhost:5000/getPokemon?id=${id}`)
        .then((res) => (companionJSON = res))
        .catch((error) => console.log(error.message));

    console.log(companionJSON);
    return companionJSON;
}

// Get the name
export async function getCompanionName(id) {
    let companionName;
    await axios
        .get(`http://localhost:5000/getPokemon?id=${id}`)
        .then((res) => (companionName = res.data.name))
        .catch((error) => console.log(error.message));

    return companionName;
}

// Get the sprite URL
export async function getSpriteUrl(id) {
    let spriteUrl;
    await axios
        .get(`http://localhost:5000/getPokemon?id=${id}`)
        .then((res) => (spriteUrl = res.data.sprite))
        .catch((error) => console.log(error.message));

    return spriteUrl;
}
