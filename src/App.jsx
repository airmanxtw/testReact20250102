import { useState, useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  // const [count, setCount] = useState({value:0});

  // useEffect(() => {
  //   let id = setInterval(() => {
  //     setCount((c) => {
  //       return {...c,value:c.value + 1};
  //     });
  //   }, 1000);
  //   return () => {
  //     clearInterval(id);
  //   };
  // }, []);

  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <>
      <h1>Hello App</h1>   
      {/* <Counter />   */}
    </>
  );
  
}

export default App;
