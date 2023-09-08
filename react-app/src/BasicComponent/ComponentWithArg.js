import { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function ComponentWithArgument() {
  return (
    <div>
      <div>
        <ButtonWithArgument initialValue={4} incrementBy={2} />
      </div>
      <Alert variant="info">Initial value 4; Increment by 2</Alert>
    </div>
  );
}

function ButtonWithArgument(props) {
  const [currentValue, setState] = useState(props.initialValue);
  const onClickHandler = () => setState(currentValue + props.incrementBy);
  return (
    <Button variant="secondary" onClick={onClickHandler}>
      {currentValue}
    </Button>
  );
}
