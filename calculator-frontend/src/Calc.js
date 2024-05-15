import React, { useState } from "react";

export default function Calc() {
  const [currentValue, setCurrentValue] = useState("0");
  const [expression, setExpression] = useState("");

  const handleClick = async (e) => {
    const value = e.currentTarget.value;
    console.log("Button clicked:", value);
    console.log("Current expression:", expression);
    console.log("Current value:", currentValue);

    switch (value) {
      // Numbers and decimal point
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
        setCurrentValue((prev) =>
          prev === "0" && value !== "." ? value : prev + value
        );
        setExpression((prev) => prev + value);
        break;

      // Calculator operations
      case "+":
      case "-":
      case "*":
      case "/":
        if (currentValue === "0" && value === "/") {
          alert("Cannot divide by zero");
          break;
        }
        if (currentValue === "0" && (value === "+" || value === "-")) {
          setCurrentValue(value);
          setExpression((prev) => prev + value);
        } else {
          setExpression((prev) => prev + value);
          setCurrentValue("0");
        }
        break;

      // Calculating the result
      case "=":
        if (!expression) return;
        try {
          console.log("Sending expression to backend:", expression);
          const response = await fetch("http://localhost:3000/calculate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ expression }),
          });

          const data = await response.json();
          if (response.ok) {
            setCurrentValue(data.result.toString());
            setExpression(data.result.toString());
          } else {
            setCurrentValue("Error");
            setExpression("");
          }
        } catch (error) {
          console.error("Error:", error);
          setCurrentValue("Error");
          setExpression("");
        }
        break;

      // Clearing the results
      case "clearAll":
        setCurrentValue("0");
        setExpression("");
        break;
      case "clearEntry":
        setCurrentValue("0");
        setExpression((prev) => prev.slice(0, -currentValue.length));
        break;
      default:
        setCurrentValue(null);
        break;
    }
  };

  return (
    <div className="App">
      <p id="resultScreen">{expression || currentValue}</p>
      <div className="calcBtns" id="firstRow">
        <button value="clearAll" onClick={handleClick}>
          AC
        </button>
        <button value="clearEntry" onClick={handleClick}>
          CE
        </button>
        <button value="/" onClick={handleClick}>
          ÷
        </button>
      </div>
      <div className="calcBtns">
        <button value="7" onClick={handleClick}>
          7
        </button>
        <button value="8" onClick={handleClick}>
          8
        </button>
        <button value="9" onClick={handleClick}>
          9
        </button>
        <button value="*" onClick={handleClick}>
          x
        </button>
      </div>
      <div className="calcBtns">
        <button value="4" onClick={handleClick}>
          4
        </button>
        <button value="5" onClick={handleClick}>
          5
        </button>
        <button value="6" onClick={handleClick}>
          6
        </button>
        <button value="-" onClick={handleClick}>
          -
        </button>
      </div>
      <div className="calcBtns">
        <button value="1" onClick={handleClick}>
          1
        </button>
        <button value="2" onClick={handleClick}>
          2
        </button>
        <button value="3" onClick={handleClick}>
          3
        </button>
        <button value="+" onClick={handleClick}>
          +
        </button>
      </div>
      <div className="calcBtns">
        <button id="bigZero" value="0" onClick={handleClick}>
          0
        </button>
      
        <button value="=" onClick={handleClick}>
          =
        </button>
      </div>
    </div>
  );
}
