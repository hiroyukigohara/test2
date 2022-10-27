import logo from './logo.svg';
import './App.css';
import { adCheck } from '@plai-io/public-misc';

function App() {
  const a = adCheck("Hello");
  console.log(`adCheck = ${a ? "YES" : "NO"}`)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
