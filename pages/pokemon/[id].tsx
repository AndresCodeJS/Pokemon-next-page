import React, { useEffect, useState } from "react";

import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Grid, Text, Container, Card, Button, Image } from "@nextui-org/react";

import confetti from "canvas-confetti";

import { Layout } from "../../components/layouts";
import { toggleFavorites, isInFavorites } from "../../utils";
import { getPokemonData } from '../../utils/GetPokemonData';
import { Props,PokemonDetails } from '../../interfaces';

const PokemonPage: NextPage<Props> = ({
  id,
  name,
  abilities,
  image,
  sprites,
}) => {
  const [isFavorite, setIsFavorite] = useState<Boolean>(false);

  const toggleClick = (): void => {
    setIsFavorite(toggleFavorites(Number(id)));
    if (!isFavorite) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  };

  useEffect(() => {
    setIsFavorite(isInFavorites(Number(id)));
  }, []);

  return (
    <Layout title={name}>
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable={true} css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={image?.front_default || "No se encontro la imagen"}
                alt={name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "10px",
              }}
            >
              <Text h1 transform="capitalize">
                {name}
              </Text>
              <Button color="gradient" ghost onPress={toggleClick}>
                {isFavorite ? "Remove favorite" : "Add favorite"}
              </Button>
            </Card.Header>

            <Card.Body css={{ marginLeft: "10px" }}>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex">
                <Image
                  src={sprites.front_default || "No se encontro la imagen"}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.back_default || "No se encontro la imagen"}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.front_shiny || "No se encontro la imagen"}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.back_shiny || "No se encontro la imagen"}
                  alt={name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => ({
    params: { id: `${index + 1}` },
  }));



  return {
    paths: pokemons151,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<PokemonDetails> => {
  const { id } = params as { id: string };

  return await getPokemonData(id)
};

export default PokemonPage;
