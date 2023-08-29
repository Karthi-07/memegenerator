import React from 'react'
import '../style/cardstyle.css'
import filledstar from '../assets/filledstar.png'
import emptystar from '../assets/1024px-Empty_Star.svg.png'
export default function Star(props) {
    console.log(props);
    var image = (props.isFavorite)?filledstar:emptystar;
    console.log(image);
    return (
    <div>
        <img src={image} 
             className='fav' 
             onClick={props.handleClick}>
        </img>
    </div>
  )
}
