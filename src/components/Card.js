 import React from 'react'
 import { useState } from 'react'
 import "../style/cardstyle.css"
 import profile from '../assets/6deb89121b460fab2243c3c4192685b7.jpg'
 import filledstar from "../assets/filledstar.png"
 import emptystar from "../assets/1024px-Empty_Star.svg.png"
 
 export default function Card() {
    const [card,setCard] = useState({
        firstname:"Karthi",
        lastname:"Keyan",
        DoB:"22-03-2003",
        phone:"9900887700",
        email:"abcdef@gmail.com",
        isFavorite:true
    })
    function toggle(){
        setCard(prev=>{
          return {
            // firstname: prev.firstname,
            // lastname:prev.lastname,
            // DoB:prev.DoB,
            // phone:prev.phone,
            // email:prev.email,
            ...prev,
            isFavorite:!prev.isFavorite
           }
        })
    }
    var image = (card.isFavorite)?filledstar:emptystar;
    return (
     <>
      <div className='card'>
          <img src={profile} className='card-image'></img><br/>
          <img src={image} onClick={toggle} className='fav'/>
          <p>{card.firstname}{card.lastname}</p>
          <p>{card.phone}</p>
          <p>{card.email}</p>
      </div>
     </>
   )
 }
 