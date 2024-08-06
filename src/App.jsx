import React, { useState, useEffect } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import axios from "axios";
import Pagination from "./components/Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const [loading, setLoading] = useState(true);
  //Fetching data whenever our currentPage changes
  //Cancel the request if it is still loading after a new request
  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPreviousPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });
    return () => {
      cancel();
    };
  }, [currentPageUrl]);
  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function gotoPrevPage() {
    setCurrentPageUrl(previousPageUrl);
  }

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <PokemonList pokemon={pokemon} />

          <Pagination
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
            gotoPrevPage={previousPageUrl ? gotoPrevPage : null}
          />
        </>
      )}
    </>
  );
}

export default App;
