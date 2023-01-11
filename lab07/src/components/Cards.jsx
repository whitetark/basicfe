import React from 'react'
import data from './Data'
import '../index.css'

const Cards = () => {
  return (
    <div className='cardBlock'>
      {data.map((game) => (
        <Card info={game} key={game.name} />
      ))}
    </div>
  )
}

const Card = ({ info }) => {
  const { img, name, price, author } = info
  return (
    <div className='card'>
      <img className='cardImg' src={img} alt='cardImg' />
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Author: {author}</p>
    </div>
  )
}

export default Cards
