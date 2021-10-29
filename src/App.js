import GameBoard from "./components/GameBoard/GameBoard";
import Header from "./components/Header/Header";
import Rules from "./components/Rules/Rules";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Rules />
      <GameBoard />
    </div>
  );
}

export default App;
