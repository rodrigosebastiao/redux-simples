import './App.css';
import Card from "./components/Card";
import Intervalo from "./components/Intervalo";

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux</h1>
      <div className="linha">
        <Intervalo>X</Intervalo>
      </div>
      <div className="linha">
        <Card title="Card 2" green>X</Card>
        <Card title="Card 3" blue>X</Card>
        <Card title="Card 4" purple>X</Card>
      </div>
    </div>
  );
}

export default App;
