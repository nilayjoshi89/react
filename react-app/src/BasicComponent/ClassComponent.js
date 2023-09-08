import React from "react";
import Button from "react-bootstrap/Button";

export default class BasicClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Count: 1 };
  }

  render() {
    return (
      <div>
        <Button
          variant="secondary"
          onClick={() => {
            this.setState((oldstate, props) => ({
              Count: oldstate.Count + 1,
            }));
          }}
        >
          Click Me
        </Button>
        <div>{this.state.Count}</div>
      </div>
    );
  }
}
