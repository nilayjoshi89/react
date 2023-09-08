import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import BasicFunctComponent from "./../BasicComponent/FunctComponent";
import BasicClassComponent from "./../BasicComponent/ClassComponent";
import BasicComponentWithState from "./../BasicComponent/ComponentWithState";
import ComponentCard from "./../BasicComponent/ComponentCard";
import BasicComponentWithArg from "./../BasicComponent/ComponentWithArg";
import BasicComponentWithCallback from "./../BasicComponent/ComponentWithCallback";
import { useState } from "react";

function Navigate() {
  const [currentDisplayKey, setCurrentDisplayKey] = useState(-1);
  const sampleComponents = [
    {
      key: "1",
      value: (
        <ComponentCard
          Title="Basic Function Component"
          Text=""
          GetComponent={() => <BasicFunctComponent />}
        />
      ),
    },
    {
      key: "2",
      value: (
        <ComponentCard
          Title="Basic Class Component"
          Text=""
          GetComponent={() => <BasicClassComponent />}
        />
      ),
    },
    {
      key: "3",
      value: (
        <ComponentCard
          Title="Component with State"
          Text=""
          GetComponent={() => <BasicComponentWithState />}
        />
      ),
    },
    {
      key: "4",
      value: (
        <ComponentCard
          Title="Component with Arguments"
          Text=""
          GetComponent={() => <BasicComponentWithArg />}
        />
      ),
    },
    {
      key: "5",
      value: (
        <ComponentCard
          Title="Component with Callback"
          Text=""
          GetComponent={() => <BasicComponentWithCallback />}
        />
      ),
    },
  ];

  const getDisplay = (key) => {
    let compToFind = sampleComponents.find((i) => i.key === key);
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
