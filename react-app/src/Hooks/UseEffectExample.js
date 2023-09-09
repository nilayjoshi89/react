import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import delay from "./../Utility/Common";

export default function UseEffectExample() {
  const [quouteHtml, setQuoteHtml] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [forceLoad, setForceLoad] = useState(0);

  async function asyncLoad() {
    setIsLoading(true);
    setQuoteHtml(<div>Fetching data... Please wait...</div>);
    await delay(2000);
    setQuoteHtml(<div>Component loaded successfully</div>);
    setIsLoading(false);
  }

  useEffect(() => {
    asyncLoad();
    return () => {
      console.log("Tear down function!");
    };
  }, []);

  useEffect(() => {
    asyncLoad();
    return () => {
      console.log("ForceLoad Tear down function!");
    };
  }, [forceLoad]);

  return (
    <div>
      <div>
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <div>{quouteHtml}</div>
        <br />
        {!isLoading && (
          <Button
            variant="secondary"
            onClick={() => setForceLoad((prevValue) => prevValue + 1)}
          >
            Force Reload
          </Button>
        )}
      </div>
    </div>
  );
}
