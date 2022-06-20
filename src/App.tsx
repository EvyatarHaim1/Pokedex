import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { PokemonItem, pokemonsIndexData } from "./interfaces";
import { getPokemons, getUrls } from "./pokemonsApi";
import Background from "./assets/svgs/background.svg";

import TopImages from "./components/TopImages";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";
import Pagination from "./components/Pagination";

function App() {
  const [pokemonsUrls, setPokemonsUrls] = useState<pokemonsIndexData[]>([]);
  const [urlsBySearch, setUrlsBySearch] = useState<pokemonsIndexData[]>([]);
  const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const LAST_PAGE: number = Math.ceil(urlsBySearch.length / 12);

  useEffect(() => {
    async function fetchUrls() {
      let urls = await getUrls();
      setPokemonsUrls(urls);
      setUrlsBySearch(urls);
      let pokemonsData = await getPokemons(urls, currentPage);
      setPokemons(pokemonsData);
    }
    fetchUrls();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function updatePgeContent() {
      let pokemonsData = await getPokemons(urlsBySearch, currentPage);
      setPokemons(pokemonsData);
    }
    updatePgeContent();
  }, [currentPage, urlsBySearch]);

  return (
    <Box bgImage={Background} minH="100vh">
      <TopImages />
      <Flex direction="column" align="center">
        <SearchBar
          pokemonsUrls={pokemonsUrls}
          setUrlsBySearch={setUrlsBySearch}
          setCurrentPage={setCurrentPage}
        />
        <Cards pokemons={pokemons} numOfPokemons={urlsBySearch.length} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          lastPage={LAST_PAGE}
        />
      </Flex>
    </Box>
  );
}

export default App;
