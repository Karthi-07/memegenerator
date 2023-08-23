import React, { useState } from "react";
import logo from "D:/MERN - stack/memegenerator/src/assets/unnamed.png";
import "D:/MERN - stack/memegenerator/src/style/headerstyle.css";
import memesData from "./memesData";
const Meme = () => {
  const [memeImage,setMemeImage] = useState("");
  function handleclick() {
    var arr = memesData.data.memes;
    var p = Math.floor(Math.random()*arr.length);
    setMemeImage(()=>memesData.data.memes[p].url);
  }
  return (
    <main>
      <div className="form">
        <div className="input">
          <input type="text" className="up" placeholder="Top text" />
          <input type="text" className="down" placeholder="Bottom text" />
        </div>
        <br></br>
        <button className="button" onClick={handleclick}>
          Generate Meme
        </button>
      </div>
      <div></div>
      <img src={memeImage} className="memeimage" ></img>
    </main>
  );
};
export default Meme;