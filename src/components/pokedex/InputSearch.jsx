import React from 'react'
import { useNavigate } from 'react-router-dom'

export const InputSearch = () => {


  const navigate = useNavigate()

  const submit= event =>{
    event.preventDefault()
    event.target.search.value
    navigate(`/pokedex/${event.target.search.value.trim().toLowerCase()}`)

  }


  return (
    <form className='search__form' onSubmit={submit}>
      <input className='search__input' id='search' type="text" placeholder='Search a Pokémon'/>
      <button className='search__btn'>Search</button>



      
    </form>
  )
}
