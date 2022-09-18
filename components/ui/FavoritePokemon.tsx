import React, { FC } from "react";
import { Grid, Card } from "@nextui-org/react";
import { useRouter } from 'next/router';

interface Favorites {
  favoritePokemons: number[];
}

export const FavoritePokemon: FC<Favorites> = ({ favoritePokemons }) => {
    const router = useRouter()
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemons.map((idPokemon) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={idPokemon}>
          <Card
            isHoverable={true}
            isPressable={true}
            css={{ padding: 10 }}
            onPress={() => {
              router.push(`/pokemon/${idPokemon}`);
            }}
          >
            <Card.Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg`}
            />
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};


