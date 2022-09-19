import { pokeApi } from "../api/pokeApi";
import { GetPokemonData, Props } from "../interfaces";
import { Pokemon } from "../interfaces/pokemon-full";

export const getPokemonData = async (nameOrId: string) => {
  try {

    

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId.toLocaleLowerCase()}`);

    const objPokemon = {
      pokemon: {
        id: `${data.id}`,
        name: data.forms[0].name,
        abilities: data.abilities.map((item) => item.ability.name),
        image: data.sprites.other?.dream_world,
        sprites: data.sprites,
      },
    };

    return objPokemon;
  } catch (errors) {
    return { pokemon: undefined };
  }
};
