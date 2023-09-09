import React, { useState, useEffect, useReducer } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import delay from "./../Utility/Common";

export default function UseReducerExample() {
  const initialValue = {
    quouteHtml: "",
    isLoading: true,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "loadStart":
        return { ...state, isLoading: true };
      case "setQuote":
        return { ...state, quouteHtml: action.quote };
      case "loadEnd":
        return { ...state, isLoading: false };
      default:
        return action;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialValue);

  async function asyncLoad() {
    dispatch({ type: "loadStart" });

    dispatch({
      type: "setQuote",
      quote: <div>Fetching data... Please wait...</div>,
    });
    await delay(2000);
    dispatch({
      type: "setQuote",
      quote: <div>Component loaded successfully</div>,
    });
    dispatch({ type: "loadEnd" });
  }

  useEffect(() => {
    asyncLoad();
    return () => {
      console.log("Tear down function!");
    };
  }, []);

  return (
    <div>
      <div>
        {state.isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <div>{state.quouteHtml}</div>
        <br />
        {!state.isLoading && (
          <Button variant="secondary" onClick={() => asyncLoad()}>
            Force Reload
          </Button>
        )}
      </div>
    </div>
  );
}
