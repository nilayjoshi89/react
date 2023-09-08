import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function ComponentWithState() {
  const [currentState, setState] = useState("defaultTextValue");
  const onClickHandler = () => setState(new Date().toString());
  return (
    <div>
      <Button variant="secondary" onClick={onClickHandler}>
        {currentState}
      </Button>
    </div>
  );
}
