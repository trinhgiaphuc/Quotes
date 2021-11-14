import { useState, useEffect } from "react";

const useCounter = (defaultValue, forward) => {
  const [counter, setCounter] = useState(defaultValue);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) setCounter(prevCounter => prevCounter + 1);
      else if (!forward) setCounter(prevCounter => prevCounter - 1);
      else throw new Error("Type wrong or something??");
    }, 1000);
    return () => clearInterval(interval);
  }, [forward]);
  return [counter, setCounter];
};

export default useCounter;
