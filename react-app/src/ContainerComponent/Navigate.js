import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import getSampleComponentData from "./../Data/SampleComponentData";

import { useState } from "react";

function Navigate() {
  const [currentDisplayKey, setCurrentDisplayKey] = useState(-1);

  const getDisplay = (key) => {
    let compToFind = getSampleComponentData().find((i) => i.key === key);
    if (compToFind === undefined) {
      return "Nothing to display";
    }

    return compToFind.value;
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" onClick={() => setCurrentDisplayKey("-1")}>
            NJ Demo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => setCurrentDisplayKey("-1")}>
                Home
              </Nav.Link>
              <NavDropdown title="Basic Components" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="#home"
                  onClick={() => setCurrentDisplayKey("1")}
                >
                  Function Comp.
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#home"
                  onClick={() => setCurrentDisplayKey("2")}
                >
                  Class Comp.
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#home"
                  onClick={() => setCurrentDisplayKey("3")}
                >
                  Comp. w/ State
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#home"
                  onClick={() => setCurrentDisplayKey("4")}
                >
                  Comp. w/ Arguments
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#home"
                  onClick={() => setCurrentDisplayKey("5")}
                >
                  Comp. w/ Callback
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Hooks" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="#home"
                  onClick={() => setCurrentDisplayKey("6")}
                >
                  useState
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#home"
                  onClick={() => setCurrentDisplayKey("7")}
                >
                  useEffect
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#home"
                  onClick={() => setCurrentDisplayKey("8")}
                >
                  useReducer
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <div>{getDisplay(currentDisplayKey)}</div>
    </>
  );
}

export default Navigate;
