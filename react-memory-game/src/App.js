import './App.css';
import Cards from './Components/Cards';

function App() {


  return (
    <div className="App" id="card">
      <h1>Leaf It!</h1>
      <Cards />
      <br></br>
      <div class="actions">
        <button onclick="restart()">Restart</button>
      </div>
    </div>
  );
}


export default App;
