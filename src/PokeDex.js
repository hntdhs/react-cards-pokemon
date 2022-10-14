import React from "react";
import { useAxios } from "./hooks";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
// old top of function:
// function PokeDex() {
//   const [pokemon, setPokemon] = useState([]);
//   const addPokemon = async name => {
//     const response = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${name}/`
//     );
//     setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
//   };
  function PokeDex() {
    const [pokemon, addPokemon, clearPokemon] = useAxios(
      "pokemon",
      "https://pokeapi.co/api/v2/pokemon/"
    );
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
        <button onClick={clearPokemon}>Delete the pokemon!</button>
      </div>
      {/* old card area: */}
      {/* <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div> */}
      {/* new card area: */}
      <div className="PokeDex-card-area">
        {pokemon.map(card => (
          <PokemonCard key={card.id} {...card} />
        ))}
        {/* makes use PokemonSelect to get the data for each card */}
      </div>
    </div>
  );
}

export default PokeDex;