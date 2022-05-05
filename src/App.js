import "./App.css";
import { useState } from "react";

function App() {
  const [firstNr, setFirstNr] = useState(0);
  const [operator, setOperator] = useState("");
  const [secondNr, setSecondNr] = useState(0);
  const [result, setResult] = useState("");

  const calculate = () => {
    if (operator === "+") {
      setResult(firstNr + secondNr);
    }
    if (operator === "-") {
      setResult(firstNr - secondNr);
    }
    if (operator === "*") {
      setResult(firstNr * secondNr);
    }
    if (operator === "÷") {
      setResult(firstNr / secondNr);
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNr}</p>
        <div className="numbers">
          <button onClick={() => setFirstNr(1)}>1</button>
          <button onClick={() => setFirstNr(2)}>2</button>
          <button onClick={() => setFirstNr(3)}>3</button>
          <button onClick={() => setFirstNr(4)}>4</button>
          <button onClick={() => setFirstNr(5)}>5</button>
          <button onClick={() => setFirstNr(6)}>6</button>
          <button onClick={() => setFirstNr(7)}>7</button>
          <button onClick={() => setFirstNr(8)}>8</button>
          <button onClick={() => setFirstNr(9)}>9</button>
          <button onClick={() => setFirstNr(0)}>0</button>
          <button onClick={() => setFirstNr("")}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => setOperator("+")}>+</button>
          <button onClick={() => setOperator("-")}>-</button>
          <button onClick={() => setOperator("*")}>*</button>
          <button onClick={() => setOperator("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNr}</p>
        <div className="numbers">
          <button onClick={() => setSecondNr(1)}>1</button>
          <button onClick={() => setSecondNr(2)}>2</button>
          <button onClick={() => setSecondNr(3)}>3</button>
          <button onClick={() => setSecondNr(4)}>4</button>
          <button onClick={() => setSecondNr(5)}>5</button>
          <button onClick={() => setSecondNr(6)}>6</button>
          <button onClick={() => setSecondNr(7)}>7</button>
          <button onClick={() => setSecondNr(8)}>8</button>
          <button onClick={() => setSecondNr(9)}>9</button>
          <button onClick={() => setSecondNr(0)}>0</button>
          <button onClick={() => setSecondNr("")}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
