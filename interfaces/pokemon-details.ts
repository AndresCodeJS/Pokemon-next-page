import { DreamWorld, Sprites } from "./pokemon-full";

export interface Props {
  id: string;
  name: string;
  abilities: string[];
  image?: DreamWorld;
  sprites: Sprites;
}

export interface PokemonDetails {
  props: Props;
  revalidate: number;
}

export interface GetPokemonData {
  pokemon: Props | undefined;
}
