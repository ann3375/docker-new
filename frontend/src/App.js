import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const makeApi = () => {
    axios("api/api/testapidata").then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.zzsdsdsd
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={makeApi}>make</button>
    </div>
  );
}

export default App;
