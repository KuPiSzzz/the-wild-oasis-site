"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((e) => e + 1);
  }
  return <button onClick={handleClick}>{count}</button>;
}
