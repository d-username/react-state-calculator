import "./App.css";
import { useState } from "react";

function App() {
  const [firstNr, setFirstNr] = useState(0);
  const [operator, setOperator] = useState("");
  const [secondNr, setSecondNr] = useState(0);
  const [result, setResult] = useState("");
  const [storedValue, setStoredValue] = useState("...");

  const appendFirstNrs = (nr) => {
    if (firstNr === 0 || firstNr === "") {
      setFirstNr(nr);
    } else {
      setFirstNr(firstNr.toString() + nr);
    }
  };

  const appendSecondNrs = (nr) => {
    if (secondNr === 0 || secondNr === "") {
      setSecondNr(nr);
    } else {
      setSecondNr(secondNr.toString() + nr);
    }
  };

  const calculate = () => {
    if (operator === "+") {
      setResult(Number(firstNr) + Number(secondNr));
    }
    if (operator === "-") {
      setResult(Number(firstNr) - Number(secondNr));
    }
    if (operator === "*") {
      setResult(Number(firstNr) * Number(secondNr));
    }
    if (operator === "÷") {
      setResult(Number(firstNr) / Number(secondNr));
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNr}</p>
        <div className="numbers">
          {/* so i could not pass through parameters, i had to change to arrow function */}
          {/* <button onClick={appendNrs()}>1</button> */}
          <button onClick={() => appendFirstNrs(1)}>1</button>
          <button onClick={() => appendFirstNrs(2)}>2</button>
          <button onClick={() => appendFirstNrs(3)}>3</button>
          <button onClick={() => appendFirstNrs(4)}>4</button>
          <button onClick={() => appendFirstNrs(5)}>5</button>
          <button onClick={() => appendFirstNrs(6)}>6</button>
          <button onClick={() => appendFirstNrs(7)}>7</button>
          <button onClick={() => appendFirstNrs(8)}>8</button>
          <button onClick={() => appendFirstNrs(9)}>9</button>
          <button onClick={() => appendFirstNrs(0)}>0</button>
          <button onClick={() => setFirstNr("")}>Clear</button>
          <button onClick={() => setFirstNr(storedValue)}>Recall</button>
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
          <button onClick={() => appendSecondNrs(1)}>1</button>
          <button onClick={() => appendSecondNrs(2)}>2</button>
          <button onClick={() => appendSecondNrs(3)}>3</button>
          <button onClick={() => appendSecondNrs(4)}>4</button>
          <button onClick={() => appendSecondNrs(5)}>5</button>
          <button onClick={() => appendSecondNrs(6)}>6</button>
          <button onClick={() => appendSecondNrs(7)}>7</button>
          <button onClick={() => appendSecondNrs(8)}>8</button>
          <button onClick={() => appendSecondNrs(9)}>9</button>
          <button onClick={() => appendSecondNrs(0)}>0</button>
          <button onClick={() => setSecondNr("")}>Clear</button>
          <button onClick={() => setSecondNr(storedValue)}>Recall</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={calculate}>=</button>
        </div>
        <button onClick={() => setStoredValue(result)}>Store Answer</button>
        <p>{storedValue}</p>
      </div>
    </div>
  );
}

export default App;
