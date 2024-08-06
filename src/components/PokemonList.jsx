import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 lg:grid-rows-4 grid-rows-10">
      {pokemon.map((p) => (
        <div
          className="h-[220px] w-[180px] relative overflow-hidden bg-gray-200 rounded-lg hover:scale-105"
          key={p}
        >
          <h2 className="absolute bottom-1 left-2 text-slate-900 ">{p}</h2>
          <img
            src={`https://img.pokemondb.net/artwork/${p}.jpg`}
            className="absolute top-[40%] left-1/2 h-[90%] w-full object-cover transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      ))}
    </div>
  );
}
