import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

import { PokemonItem } from "../interfaces";

import Card from "./Card";

interface Props {
  pokemons: PokemonItem[];
  numOfPokemons: number;
}

const Cards: React.FC<Props> = ({ pokemons, numOfPokemons }) => {
  return !numOfPokemons ? (
    <Flex justify="center">
      <Heading>No pokemons found by that name</Heading>
    </Flex>
  ) : (
    <Flex wrap="wrap" gap={[2, 4]} w={["100%", "80%", "60%"]} justify="center">
      {pokemons?.map((item) => (
        <Card key={item.id} pokemon={item} />
      ))}
    </Flex>
  );
};

export default Cards;
