import React from "react";
import { Flex, Image, Text, useDisclosure } from "@chakra-ui/react";

import { PokemonItem } from "../interfaces";
import cardBG from "../assets/svgs/cardBG.svg";
import loadImg from "../assets/svgs/loadingImg.svg";

import Modal from "../components/Modal";

interface Props {
  pokemon: PokemonItem;
}
const Card: React.FC<Props> = ({ pokemon }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      onClick={onOpen}
      cursor="pointer"
      direction="column"
      align="center"
      pt="9px"
      w="128px"
      pb="13px"
      rounded="17px"
      boxShadow="4px 4px 0px rgba(0, 67, 192, 0.42)"
      bgColor="white"
      transition="0.5s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image
        src={pokemon?.sprites?.front_default!}
        fallbackSrc={loadImg}
        alt="pokemon image"
        bgImage={cardBG}
        w="115px"
      />
      <Text
        color="#1F0079"
        fontSize={pokemon.name.length > 10 ? "11px" : "16px"}
        textAlign="center"
        fontWeight="600"
        fontFamily="Rubik"
        fontStyle="italic"
        w="90%"
      >
        {pokemon.name.toUpperCase()}
      </Text>
      <Modal
        pokemon={pokemon}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </Flex>
  );
};

export default Card;
