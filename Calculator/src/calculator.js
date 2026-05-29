import React, { useState } from "react";

function Calculator() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operator) => {

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operator) {

      case "+":
        setResult(number1 + number2);
        break;

      case "-":
        setResult(number1 - number2);
        break;

      case "*":
        setResult(number1 * number2);
        break;

      case "/":
        if (number2 === 0) {
          setResult("Cannot divide by zero");
        } else {
          setResult(number1 / number2);
        }
        break;

      default:
        setResult("");
    }
  };

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.heading}>Modern Calculator</h1>

        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={styles.input}
        />

        <div style={styles.buttonContainer}>

          <button
            style={styles.button}
            onClick={() => calculate("+")}
          >
            +
          </button>

          <button
            style={styles.button}
            onClick={() => calculate("-")}
          >
            −
          </button>

          <button
            style={styles.button}
            onClick={() => calculate("*")}
          >
            ×
          </button>

          <button
            style={styles.button}
            onClick={() => calculate("/")}
          >
            ÷
          </button>

        </div>

        <div style={styles.resultBox}>
          Result: {result}
        </div>

      </div>
    </div>
  );
}

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #000000, #1a1a1a)",
    fontFamily: "Arial",
  },

  card: {
    width: "350px",
    padding: "35px",
    borderRadius: "20px",
    background: "#111111",
    boxShadow: "0 0 25px rgba(0,255,255,0.3)",
    textAlign: "center",
    border: "1px solid #2c2c2c",
  },

  heading: {
    color: "#00ffff",
    marginBottom: "25px",
    fontSize: "32px",
    letterSpacing: "1px",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "1px solid #333",
    backgroundColor: "#1e1e1e",
    color: "white",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
  },

  buttonContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
    marginTop: "15px",
  },

  button: {
    padding: "15px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg, #00ffff, #007cf0)",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 4px 10px rgba(0,255,255,0.3)",
  },

  resultBox: {
    marginTop: "25px",
    padding: "18px",
    borderRadius: "12px",
    background: "#1e1e1e",
    color: "#00ffff",
    fontSize: "22px",
    fontWeight: "bold",
    border: "1px solid #333",
  },
};

export default Calculator;