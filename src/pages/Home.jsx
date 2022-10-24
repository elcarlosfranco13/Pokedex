import React from 'react'
import FormHome from '../components/home/FormHome'
import "./styles/home.css"
import pokedexSmall from "./images/pokedexSmall.png"

const Home = () => {
  return (
    <section className='pokedex'>
      <img className='pokedex__img' src={pokedexSmall} alt="" />
      <header className='pokedex__header'>
      <h2 className='pokedex__subtitle'>Hi Trainer!!</h2>
      <p className='pokedex__text'>Enter your name to see the Pokedex</p>
      </header>
      <FormHome />
      
    </section>
  )
}

export default Home