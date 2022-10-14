import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice, formatPokemon } from "./helpers";

/* Select element to choose from common pokemon. */
function PokemonSelect({ add, pokemon = pokemonList }) {
  const [pokeIdx, setPokeIdx] = useState(0);
  const handleChange = evt => {
    setPokeIdx(evt.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>
      {/* old way for selection buttons */}
      {/* <button onClick={() => add(pokemon[pokeIdx])}>Catch one!</button>
      <button onClick={() => add(choice(pokemon))}>I'm feeling lucky</button> */}
      {/* new way for selection buttons */}
      <button onClick={() => add(formatPokemon, pokemon[pokeIdx])}>
        Catch one!
      </button>
      <button onClick={() => add(formatPokemon, choice(pokemon))}>
        I'm feeling lucky
      </button>
      {/* makes use of formatPokemon in helpers.js */}
    </div>
  );
  // when dropdown menu selection is made, run handleChange, which sets index to chosen pokemon
}

export default PokemonSelect;
