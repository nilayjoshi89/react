import { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function ComponentWithCallback() {
  const [msg, setMsg] = useState("Click Button!");
  const updateMessageHandler = (updatedMsg) =>
    setMsg("Update received: " + updatedMsg);
  return (
    <div>
      <div>
        <ButtonWithCallback
          initialValue={4}
          incrementBy={2}
          updateMessage={updateMessageHandler}
        />
      </div>
      <Alert variant="info">{msg}</Alert>
    </div>
  );
}

function ButtonWithCallback(props) {
  const [currentValue, setState] = useState(props.initialValue);
  const onClickHandler = () => {
    setState(currentValue + props.incrementBy);
    props.updateMessage(currentValue + props.incrementBy);
  };
  return (
    <Button variant="secondary" onClick={onClickHandler}>
      {currentValue}
    </Button>
  );
}
