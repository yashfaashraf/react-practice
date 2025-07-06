import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //let counter = 15;
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log(counter);
  };
  // const removeValue = () => {
  //   counter - 1;
  //   setCounter(counter);
  // };
  return (
    <>
      <h1>Counter : {counter} </h1>
      <button onClick={addValue}>Add Value </button>
      <button
        onClick={() => {
          counter = counter - 1;
          setCounter(counter);
        }}
      >
        Remove Value Value
      </button>
    </>
  );
}

export default App;
