import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import Header from './components/Header/Header';
import Rules from './components/Rules/Rules';

function App() {
  return (
    <div className="app">
      <Header />
      <Rules />
      <GameBoard />
    </div>
  );
}

export default App;
