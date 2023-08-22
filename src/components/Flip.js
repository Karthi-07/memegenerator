import React from 'react'

export default function Flip() {

 const [flip,setFlip] = React.useState(true);

 function handleclick(){
    //setFlip(prev=>prev?false:true);
    //or we put just opposite
    setFlip(prev=>!prev);
 }

return (
    <>
    <div onClick={handleclick}>
        Do I feel like going to night
    </div>
    <div>
        {flip?"YES":"NO"}
    </div>
    </>

  )
}
