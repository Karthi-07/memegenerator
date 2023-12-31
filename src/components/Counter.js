import React from 'react'
import Count from './Count';
export default function Counter() {
   // const useState = React.useState("Hello");
    /* use State generally returns an array with first parameter as
       and second parameter as a callback function 
    */

 /* 
    //simple - state example
     const [state,setState]=React.useState("YES");
     console.log(state);
     function handleclick()
     {
        setState("NO");
     }
*/
/* 
  // simple state example
  const date = new Date();
  const hours = date.getHours();
   var res ="" 
   console.log(hours);
  if(hours>=4 && hours<12)
      res="Good Morning..!"+props.name;
  else if(hours>=12 && hours<17)
      res="Good Afternoon..!"+props.name;
  else if(hours>=17 && hours<19)
      res="Good Evening..!"+props.name;
  else  
      res="Good Night..!"+props.name;
*/

/*  // simple counter example using stete
*/ 
const [counter,setCounter] = React.useState(0);
function plusOne(){
    setCounter((counter) => counter+1);
}
function minusOne(){
     setCounter((counter)=>counter-1);
}
function reset(){
    setCounter((counter)=>0);
}
return (
    <>
    <p onClick={reset}>reset</p>
    <p onClick={plusOne}>+</p>
    <Count number={counter}/>
    <p onClick={minusOne}>-</p>
   </>
  )
}
