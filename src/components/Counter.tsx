import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const encrement = () => {
    setCount(count + 1);
  };

  return (
    <div className={classes.green}>
      <h1>Counter</h1>
      {count}
      <button onClick={encrement}>increment</button>
    </div>
  );
};
