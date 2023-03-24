import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import PokemonDetails from "./components/PokemonDetail";
import { Pokemon } from "./components/Interfaces";
import Buttons from "./components/Buttons";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);
  const [showNoResultsMessage, setShowNoResultsMessage] = useState<boolean>(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
      const results = response.data.results;
      const filteredResults = results.filter((result: any) => {
        return result.name.includes(searchTerm.toLowerCase());
      });

      const pokemonList = await Promise.all(
        filteredResults.map(async (result: any) => {
          const pokemonResponse = await axios.get(result.url);
          const pokemonData = pokemonResponse.data;
          const pokemon: Pokemon = {
            name: pokemonData.name,
            imageUrl: pokemonData.sprites.front_default,
            height: pokemonData.height,
            weight: pokemonData.weight,
            types: pokemonData.types.map((type: any) => type.type.name)
          };
          return pokemon;
        })
      );

      setPokemonList(pokemonList);
      setSelectedPokemon(null);
      setOffset(0);
      setTotal(pokemonList.length);
      setShowNoResultsMessage(pokemonList.length === 0);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePokemonClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handlePrev = () => {
    setOffset(offset - limit);
  };

  const handleNext = () => {
    setOffset(offset + limit);
  };

  const prevDisabled = offset === 0;
  const nextDisabled = offset + limit >= total;

  const hasResults = pokemonList.length > 0;

  return (
    <div>
      <Header onSearchSubmit={handleSearchSubmit} onSearchChange={handleSearchChange} />
      <main>
        <div className="pokemon-container-details">
          {(pokemonList.length > 0 || selectedPokemon) && (
            <div className="pokemon-container">
              {pokemonList.slice(offset, offset + limit).map((pokemon) => (
                <img
                  key={pokemon.name}
                  src={pokemon.imageUrl}
                  alt={pokemon.name}
                  onClick={() => handlePokemonClick(pokemon)}
                  className="pokemon-image"
                />
              ))}
            </div>
          )}
          {selectedPokemon && (
            <div className="pokemon-details">
              <PokemonDetails pokemon={selectedPokemon} />
            </div>
          )}
        </div>
        {showNoResultsMessage && <p>No matching pokemons were found.</p>}
        {hasResults && (
          <Buttons handlePrev={handlePrev} handleNext={handleNext} prevDisabled={prevDisabled} nextDisabled={nextDisabled} />
        )}
      </main>
    </div>
  );
};

export default App;