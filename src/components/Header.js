import logo from "D:/MERN - stack/memegenerator/src/assets/unnamed.png"
import "D:/MERN - stack/memegenerator/src/style/headerstyle.css"
const Header = () => {
  return(
    <div className="header">
         <img src={logo} alt="logo image" className="logo"></img>
         <p className="title">Meme Generator</p>
    </div>
  )
}
export default Header;