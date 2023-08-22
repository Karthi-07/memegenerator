import './App.css';
import Flip from './components/Flip';
import Meme from "./components/Meme.js"
import Header from "./components/Header.js"
import Additem from './components/Additem';
import State from './components/State';
function App() {
  return (
    <div className="meme">
       <div className="App">
        <Header></Header>
        {/* <Meme/> */}
        <Additem/>
        {/* <State/> */}
        {/* <Flip/> */}
       </div>
    </div>
  );
}

export default App;
