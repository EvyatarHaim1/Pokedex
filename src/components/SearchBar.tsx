import React, { useState } from "react";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

import { pokemonsIndexData } from "../interfaces";

interface Props {
  pokemonsUrls: pokemonsIndexData[];
  setCurrentPage(currentPage: number): void;
  setUrlsBySearch(urls: pokemonsIndexData[]): void;
}

const SearchBar: React.FC<Props> = ({
  pokemonsUrls,
  setCurrentPage,
  setUrlsBySearch
}) => {
  const [pokemonName, setpokemonName] = useState<string>("");

  const searchByName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.value;
    setpokemonName(name);
    let filteredData = pokemonsUrls.filter((pokemon) =>
      pokemon.name.includes(name.toLowerCase())
    );
    setUrlsBySearch(filteredData);
    setCurrentPage(1);
  };

  return (
    <Flex
      mb="28px"
      mt="6.88px"
      w={["80%", "80%", "70%", "40%"]}
      borderRadius="17px"
      bgColor="white"
      border="2px solid #0043C0"
    >
      <InputGroup variant="flushed">
        <InputLeftElement
          pointerEvents="none"
          fontSize="1.2em"
          children={<FiSearch color="#0043C0" width="17.23px" />}
        />
        <Input
          type="text"
          onChange={searchByName}
          value={pokemonName}
          borderBottom="hidden"
          _focus={{ borderBottom: "hidden" }}
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchBar;
