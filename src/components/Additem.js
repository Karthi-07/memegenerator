import React from 'react'
import "../App.css"
export default function Additem() {
 
  const things = ["item1","item2"];
  const data = things.map((item)=><p>{item}</p>);
  function handle(){
     things.push("item"+(things.length+1));
     console.log(things);
  } 
  return (
    <div>
         <button onClick={handle}>add item</button>
        {/* <p className="pp">Data : {data}</p> */}
    </div>
  )
}
