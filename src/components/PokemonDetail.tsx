import React from "react";
import { Pokemon } from "./Interfaces";

interface PokemonDetailProps {
  pokemon: Pokemon;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon }) => {
  return (
    <div>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Types: {pokemon.types.join(", ")}</p>
    </div>
  );
};

export default PokemonDetail;