import React from "react";
import Card from "react-bootstrap/Card";

export default function ComponentCard(props) {
  return (
    <Card Header={props.Title} style={{ width: "24rem" }}>
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>{props.Text}</Card.Text>
        <div>{props.GetComponent()}</div>
      </Card.Body>
    </Card>
  );
}
