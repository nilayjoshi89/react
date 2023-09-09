import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function StateHookExample() {
  const [count, setCount] = useState(1);

  return (
    <Button
      variant="secondary"
      onClick={() => setCount((oldValue) => oldValue + oldValue)}
    >
      {count}
    </Button>
  );
}
