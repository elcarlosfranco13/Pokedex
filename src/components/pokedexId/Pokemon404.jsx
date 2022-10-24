import React from "react";
import { Link } from "react-router-dom";

const Pokemon404 = () => {
  return (
    <>
      <div>
        <h1>Pokemon not Found 404</h1>
        <Link to="/pokedex">Return to Pokedex</Link>
        <img src="./images/pokedex/charizard404.png" alt="" />
      </div>
    </>
  );
};

export default Pokemon404;
