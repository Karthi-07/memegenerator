import React from 'react'
import "../App.css"
export default function Additem() {
 
  // const things = ["item1","item2"];
  // const data = things.map((item)=><p>{item}</p>);
  // function handle(){
  //    things.push("item"+(things.length+1));
  //    console.log(things);
  // } 

  const [thingsArray,setThingsArray] = React.useState([["Things 1,Things 2"]]);
  function handle(){
    setThingsArray((array=>[...array,`Things ${array.length+2}`]))
  }
  return (
    <div>
         <button onClick={handle}>add item</button>
         <h3>{thingsArray}</h3>
        {/* <p className="pp">Data : {data}</p> */}
    </div>
  )
}
