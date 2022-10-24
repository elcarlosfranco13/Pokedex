import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pokemon404 from "../components/pokedexId/Pokemon404";
import pokemonById from "./styles/pokemonById.css";
import pokeCard from "../components/pokedex/styles/pokeCard.css"

const PokedexByID = () => {
  const { id } = useParams();

  const [pokemonid, setPokemonid] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios
      .get(URL)
      .then((res) => setPokemonid(res.data))
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);
  console.log(pokemonid)

  if (error) {
    return <Pokemon404 />;
  }

  return (
    <article className="id__card">
      <header className={`id__header bg-${pokemonid?.types[0].type.name} `}>
        <div className="id__image-container">
          <img className="id__image" src={pokemonid?.sprites.other["official-artwork"].front_default} alt=""/>
        </div>
        <h2 className={`id__header-number letter-${pokemonid?.types[0].type.name} `}># {pokemonid?.id}</h2>
        <h2 className={`id__header-name letter-${pokemonid?.types[0].type.name} `}>{pokemonid?.name}</h2>
      </header>
      <section className="id__stats">
        <div className="id__stats-container">
        {
          pokemonid?.stats.map(stat =>(
            <div className='id__stats-list' key={stat.stat.url}>
            <span className='id__stats-label'>{stat.stat.name}</span>
            <span className={`id__stats-number letter-${pokemonid?.types[0].type.name} `}>{stat.base_stat}</span>
          </div>
          ))
        }
        </div>
        <div className="id__stats-holder">
        <div className="id__stats-types" >
          <h3 className="id_stats_types-tittle">Type</h3>
        <div className='id__stats-types-ul'>
              <li className={`id__stats-types-li bg-${pokemonid?.types[0].type.name} `}>{pokemonid?.types[0].type.name}</li>
              
        </div>
        </div>
        <div className="id__stats-skills">
        <h3>Abilities</h3>
        <ul className='id__stats-skills-ul'>
          {
            pokemonid?.abilities.map(ability=> (
              <li key={ability.ability.url} className='id__stats-skills-li'>{ability.ability.name}</li>
            ))
          }
        </ul>
        </div>
        </div>

      </section>
      <section className="id__movements">
        <h2 className="id__movements-tittle">Movements</h2>
        <div className="id__movements-container">
          {
            pokemonid?.moves.slice(0,25).map(move=> (
              <ul className={`id__movements-list bg-${pokemonid?.types[0].type.name} `} key={move.move.name}>
                <li className="id__movements-item" >{move.move.name}</li>
              </ul>



            ))
          }


        </div>
      </section>

    </article>
  );
};

export default PokedexByID;
