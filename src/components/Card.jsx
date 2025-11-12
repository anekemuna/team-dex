import React from 'react'

const Card = ({ pokemon}) => {
  return (
    <div className='card'>
        <p>{pokemon.id}</p>
        <p>Name: {pokemon.name}</p>
        <p>Type: {pokemon.type}</p>
    </div>
  )
}

export default Card