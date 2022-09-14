import "./App.css";
import MainScreen from "./compenents/MainScreen";
import GameScreen from "./compenents/GameScreen";
import FinishScreen from "./compenents/FinishScreen";
function App() {
  return (
    <div className="App">
      <MainScreen />
      <GameScreen />
      <FinishScreen />
    </div>
  );
}

export default App;
