import React, { useState, useEffect } from "react";
import { getSpriteUrl } from "../../helpers/api.helper";

function PokemonSprite({ pokemonId }) {
    const [url, setUrl] = useState("");

    useEffect(() => {
        async function getUrl() {
            return await getSpriteUrl(pokemonId);
        }
        getUrl().then((url) => {
            setUrl(url);
        });
    }, [pokemonId]);

    return <img src={url} alt="Pokemon Sprite" />;
}

export default PokemonSprite;
