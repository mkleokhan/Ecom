import { Fragment, useState } from "react";

const Demo = () => {
  const [counter, setCounter] = useState();

  const handleCount = () => {
    setCounter(counter + 1);
  };

  return (
    <Fragment>
      <h1>Count: {counter}</h1>
      <button onClick={handleCount}>Increment</button>
    </Fragment>
  );
};

export default Demo;
