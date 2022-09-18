import { pokeApi } from "../api/pokeApi";
import { PokemonDetails } from "../interfaces";
import { Pokemon } from "../interfaces/pokemon-full";

export const getPokemonData = async (nameOrId: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

  const objPokemon = {
    props: {
      id: `${data.id}`,
      name: data.forms[0].name,
      abilities: data.abilities.map((item) => item.ability.name),
      image: data.sprites.other?.dream_world,
      sprites: data.sprites,
    },
  };

  return objPokemon;
};
