import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { Nofavorites } from "../../components/ui";
import { getFavorites } from "../../utils";
import { Grid, Card } from "@nextui-org/react";
import { useRouter } from 'next/router';
import {FavoritePokemon} from "../../components/ui";

const Favorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(getFavorites());
  }, []);

  const router = useRouter()
  return (
    <Layout title="Favorites">
      {favoritePokemons?.length ? (
        <FavoritePokemon favoritePokemons={favoritePokemons}/>
      ) : (
        <Nofavorites />
      )}
    </Layout>
  );
};

export default Favorites;
