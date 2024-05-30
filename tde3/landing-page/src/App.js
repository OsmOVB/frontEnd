import './App.css';
import imagemSec1 from './imagemSec1.webp';



function App() {
  return (
    <div className="">
      {/* coloca imagem atras do texto */}
      <div className={"container"}/>
      {/* <img src={imagemSec1} alt="rango"  /> */}
        <h2>Blue Apron</h2>
        <h1>A GREAT MEAL</h1>
        <span className={"colorText"}>changes everything</span>
        <p>Choose from 80+ weekly meals with high-quality 
          ingredients and options for every lifestyle, including 
          vegetarian, carb-conscious, Heat & Eat, and more.
          </p>
          <button className={"btn"}>
            VIEW PLANS
          </button>
      
    </div>
  );
}

export default App;
