import React, { useState } from "react";
import logo from "D:/MERN - stack/memegenerator/src/assets/unnamed.png";
import "D:/MERN - stack/memegenerator/src/style/headerstyle.css";
import memesData from "./memesData";

const Meme = () => {
  const [meme,setMeme] = useState({
                         toptext:"top text",
                         bottomtext:"bottom text",
                         url:"https://i.imgflip.com/30b1gx.jpg"})
  
  function handleclick() {
    var arr = memesData.data.memes;
    var p = Math.floor(Math.random()*arr.length);
    let first = document.getElementById("up").value;
    let last = document.getElementById("down").value;
    console.log(first+" "+last);
    setMeme((prev)=>{
      return {
        toptext:first,
        bottomtext:last,
        url:memesData.data.memes[p].url
      }})
  }
  return (
    <main>
      <div className="form">
        <div className="input">
          <input type="text" className="up" id="up" placeholder="Top text" />
          <input type="text" className="down" id="down" placeholder="Bottom text" />
        </div>
        <br></br>
        <button className="button" onClick={handleclick}>
          Generate Meme
        </button>
      </div>
      <div></div>
      <img src={meme.url} className="memeimage" ></img>
    </main>
  );
};
export default Meme;