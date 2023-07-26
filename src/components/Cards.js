import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Jungle from '../images/img-9.jpg'
import Islands from '../images/img-2.jpg'

function Cards() {
  return (
  <div className='cards'>
    <h1> Check out these Destinations! </h1>
    <div className= 'cards__container'>
        <div className = 'cards__wrapper'>
            <ul className = 'cards__items'> 
            <CardItem 
            src = {Jungle}
            text= "Explore the Amazon Jungle"
            label= "adventure"
            path= "/services" />
             <CardItem 
            src = {Islands}
            text= "Travel through the Islands of Bali"
            label= "luxury"
            path= "/services" />
            </ul>
        </div>
    </div>
  </div>
  )
}

export default Cards