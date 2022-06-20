import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
  Flex,
  Heading,
  Divider,
  Box
} from "@chakra-ui/react";

import loadImg from "../assets/svgs/loadingImg.svg";
import { PokemonItem } from "../interfaces";
import { capitalizeStr } from "../capitalizeStr";

interface Props {
  pokemon: PokemonItem;
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

const InfoModal: React.FC<Props> = ({ onOpen, isOpen, onClose, pokemon }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt={["-1px", "20px"]}>
          <ModalHeader>{capitalizeStr(pokemon.name)}</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={["30px", "20px"]} textAlign="center">
            <Box>
              <Image
                src={pokemon?.sprites?.front_default!}
                fallbackSrc={loadImg}
                alt="pokemon-img"
                mx="auto"
                transform="scale(1.2)"
              />
            </Box>
            <Heading>{capitalizeStr(pokemon.name)}</Heading>
            <Flex justify="space-between">
              <Flex direction="column" textAlign="start">
                <Text>STAT TYPE</Text>
                {pokemon.stats.map(({ stat }) => (
                  <Text key={stat.name}>{capitalizeStr(stat.name)}</Text>
                ))}
              </Flex>
              <Flex direction="column">
                <Text>BASE STAT</Text>
                {pokemon.stats.map((stat) => (
                  <Text key={stat.stat.name}>{stat.base_stat}</Text>
                ))}
              </Flex>
            </Flex>
            <Divider />
            <Text fontSize={["md", "xl", "2xl"]}>Height: {pokemon.height}</Text>
            <Divider />
            <Text fontSize={["md", "xl", "2xl"]}>Weight: {pokemon.weight}</Text>
            <Divider />
            <Text fontSize={["md", "xl", "2xl"]}>Abilites:</Text>
            {pokemon.abilities.map(({ ability }) => (
              <Text key={ability.name}>{capitalizeStr(ability.name)}</Text>
            ))}
            <Divider />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InfoModal;
