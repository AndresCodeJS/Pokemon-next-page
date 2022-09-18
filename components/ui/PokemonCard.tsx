import { FC } from "react";
import { SmallPokemon } from "../../interfaces";
import { Grid, Text, Row, Card } from "@nextui-org/react";
import {useRouter} from 'next/router';

type Props = {
  pokemon: SmallPokemon;
};

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, name, url, image } = pokemon;

  const router = useRouter();

  const onClick = ()=>{
    router.push(`/name/${name}`)
  }

  return (
    <Card isHoverable={true} isPressable={true} onClick = {onClick}>
      <Card.Body css={{ p: 1 }}>
        <Card.Image src={image} width="100%" height={140} />

        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
