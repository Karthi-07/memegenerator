import React from "react";
import logo from "D:/MERN - stack/memegenerator/src/assets/unnamed.png";
import "D:/MERN - stack/memegenerator/src/style/headerstyle.css";
import memesData from "./memesData";
const Meme = () => {
  function handleclick() {
    var arr = memesData.data.memes;
    console.log(arr);
    var p = Math.floor(Math.random()*arr.length);
    console.log(memesData.data.memes[p].url);
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
      {/* <img src={logo} onMouseOver={handleclick}></img>
<button onClick={handleclick}>clickme</button> */}
    </main>
  );
};
export default Meme;
