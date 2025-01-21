import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((c) => c + 1);
  };
//   const showSub = () => {
//     return <h2>this is sub</h2>;
//   };

  return (
    <>
      {
        count>5 ? <h2>this is sub</h2> : null
      }
      <h1>Hello Counter-{count}</h1>
     
      <button onClick={handleClick}>click plus</button>
    </>
  );
}
