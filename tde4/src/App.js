import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div style={{display: "flex" , justifyContent: "center", alignItems: "center"}}>
      
      <Card imagem={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Iw-TYh9PmR9ZXc0he05F52ERMuQTX6iUtA&s"} titulo={"Card title"} texto={"Secondary text"}/>
    </div>
  );
}

export default App;
