import { useState } from "react";
import "./App.css";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [expression, setExpression] = useState("");

  const handleBtnClick = (value) => {
    setDisplayValue("");
    if (value === "=") {
      if (
        !expression.includes("+") &&
        !expression.includes("-") &&
        !expression.includes("*") &&
        !expression.includes("/")
      )
        setDisplayValue("Error");
      else evaluateExpression();
    } else if (value === "C") {
      setDisplayValue("");
      setExpression("");
    } else {
      updateValue(value);
    }
  };

  const updateValue = (value) => {
    if (value === "0" && displayValue === "0") return;
    setExpression((prevState) => prevState + value);
  };

  const evaluateExpression = () => {
    try {
      const result = evaluteBODMAS(expression);
      setDisplayValue(result.toString());
    } catch (error) {
      console.log("Error while calulation", error.message);
      setDisplayValue("Error");
    }
  };

  const evaluteBODMAS = (exp) => {
    if (exp === "0/0") return "NaN";
    if (exp.includes("/0")) return "Infinity";

    return eval(exp);
  };

  return (
    <>
      <div className="calulator">
        <h1>React Calulator</h1>

        <input type="text" value={expression} readOnly />
        <div className="answser">{displayValue}</div>
        <div className="buttons">
          <button onClick={() => handleBtnClick("7")}>7</button>
          <button onClick={() => handleBtnClick("8")}>8</button>
          <button onClick={() => handleBtnClick("9")}>9</button>
          <button onClick={() => handleBtnClick("+")}>+</button>
          <button onClick={() => handleBtnClick("4")}>4</button>
          <button onClick={() => handleBtnClick("5")}>5</button>
          <button onClick={() => handleBtnClick("6")}>6</button>
          <button onClick={() => handleBtnClick("-")}>-</button>
          <button onClick={() => handleBtnClick("1")}>1</button>
          <button onClick={() => handleBtnClick("2")}>2</button>
          <button onClick={() => handleBtnClick("3")}>3</button>
          <button onClick={() => handleBtnClick("*")}>*</button>
          <button onClick={() => handleBtnClick("C")}>C</button>
          <button onClick={() => handleBtnClick("0")}>0</button>
          <button onClick={() => handleBtnClick("=")}>=</button>
          <button onClick={() => handleBtnClick("/")}>/</button>
        </div>
      </div>
    </>
  );
}

export default App;
