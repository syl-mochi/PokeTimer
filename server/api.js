import axios from "axios";

const pokeapi_endpoint = "https://pokeapi.co/api/v2/pokemon/";

/** Call the PokeAPI, return a dictionary containing id, name, sprite */
export async function getPokemon(companion) {
    try {
        const pokemon = await axios
            .get(pokeapi_endpoint.concat(companion))
            .catch((error) => console.log(error));

        const new_friend = {
            id: pokemon.data.id,
            name: pokemon.data.name,
            sprite: pokemon.data.sprites.other["official-artwork"].front_default
        };

        return new_friend;
    } catch (errors) {
        console.error(errors);
    }
}
