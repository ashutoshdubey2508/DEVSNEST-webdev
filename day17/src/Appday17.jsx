import React from "react";
import Caard from "./component/Cardday17";
import "./Styleday17.css";
function App(props){
    return(
      <div className="dad">
      <div className="a">Anime List</div>
      <div className="container">
        <Caard img="./img/0.jpg" title="Naruto" />
        <Caard img="./img/2.jpg" title="Jujutsu Kaisen" />
        <Caard img="./img/3.jpg" title="My hero acadmia" />
        <Caard img="./img/4.jpg" title="High School DXD" />
        <Caard img="./img/5.png" title="Haiyaku!" />
        </div>
      </div>
    );
  };
export default App;