import React from "react";

interface Pokemon {
  name: string;
  imageUrl: string;
  height: number;
  weight: number;
  types: string[];
}

export interface PokemonListProps {
  pokemonList: Pokemon[];
  onPokemonClick: (pokemon: Pokemon) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemonList }) => {
  return (
    <main>
      {pokemonList.map((pokemon) => (
        <img
          key={pokemon.name}
          src={pokemon.imageUrl}
          alt={pokemon.name}
          onClick={() => console.log(pokemon)}
        />
      ))}
    </main>
  );
};

export default PokemonList;