import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { InputSearch } from '../components/pokedex/InputSearch'
import PokeCard from '../components/pokedex/PokeCard'
import PokemonByType from '../components/pokedex/PokemonByType'
import pokedexStyle from "./styles/pokedexStyle.css"
import pokedexSmall from "./images/pokedexSmall.png"
import charizard from "./styles/images/charizard.gif"


const pokedex = () => {

  const [pokemons, setPokemon] = useState()
  const [typeSelected, setTypeSelected] = useState("All Pokemons")

  useEffect(() => {
    if(typeSelected !== "All Pokemons"){
      axios.get(typeSelected)
      .then(res=>{
        const result = res.data.pokemon.map(e=>e.pokemon)
        setPokemon(result)
      })
      .catch(err=>console.log(err))
    }else{
      const URL= "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0" 
      axios.get(URL)
      .then(res=> setPokemon(res.data.results))
      .catch(err=>console.log(err))
    }

  },[typeSelected] )




  const userName=useSelector(state => state.userName)

  return (
    <div>
      <header className='pokedex__header-container'>
        <div className='pokedex__header-images'>
        <img className='pokedex__header-image-left' src={pokedexSmall} alt="" />
        <img className='pokedex__header-image-right' src={charizard} alt="" />
        </div>
        <p className='pokedex__text'>Welcome<span className='pokedex__span'> {userName}</span>, this is the data of all Pokémon </p>
      </header>
      <aside className='aside-container'>
        <InputSearch/>
        <PokemonByType setTypeSelected={setTypeSelected}/>
      </aside>
      <main>
        <div className='card-container'>
          {
            pokemons?.map(pokemon => (
              <PokeCard 
              key={pokemon.url}
              url={pokemon.url}
              />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default pokedex