import logo from "./logo.svg";
import "./App.css";
import SpreadOperator from "./Component/spread-operator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>JavaScript ES6 Spread Operator</p>
        <a
          className="App-link"
          href="https://github.com/SouthpawCurveConcepts/rsb-es6-spread-operator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to repo
        </a>
        <SpreadOperator />
      </header>
    </div>
  );
}

export default App;
