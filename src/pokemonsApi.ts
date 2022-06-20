import axios from "axios";
import { API_BASE_URL } from "./env";
import { PokemonItem, pokemonsIndexData } from "./interfaces";

export const getUrls = async () => {
  const res = await axios.get(`${API_BASE_URL}?limit=1118`);
  return res.data.results;
};

export const getPokemons = async (
  res: pokemonsIndexData[],
  currentPage: number
) => {
  let FIRST_ITEM: number = (currentPage - 1) * 12;
  let LAST_ITEM: number = currentPage * 12;

  let itemsPerPage = res.slice(FIRST_ITEM, LAST_ITEM);
  let items: pokemonsIndexData[] = await Promise.all(
    itemsPerPage.map(async (item: pokemonsIndexData) => {
      let pokemon = await axios.get(item.url);
      return pokemon.data;
    })
  );
  return (items as unknown) as PokemonItem[];
};
