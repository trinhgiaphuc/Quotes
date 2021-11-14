import React from "react";
import useCounter from "../hooks/use-counter";
import Card from "./Card";

const Counter = ({ defaultValue, forward }) => {
  const [counter] = useCounter(defaultValue, forward);
  return <Card>{counter}</Card>;
};

export default Counter;
