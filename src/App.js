import React, { useState, useRef, useEffect } from "react";
import { makeRandomString, swapCase, shuffle } from "./utils/transformMethods";
import Button from "./components/Button";
import ChangeList from "./components/ChangeList";
import Results from "./components/Results";
import ButtonList from "./components/ButtonList";
import "./app.css";

const arrayChangingFunctions = {
  "Scramble each element": { fn: shuffle, method: "map" },
  "Swap case of each element": { fn: swapCase, method: "map" },
  "Add random character to each element": {
    fn: (x) => `${x}${makeRandomString(1)}`,
    method: "map",
  },
  "Remove elements that contain a capital 'B'": {
    fn: (x) => !x.includes("B"),
    method: "filter",
  },
};

const App = () => {
  const [randomArray, setRandomArray] = useState([]);
  const [outputArray, setOutputArray] = useState([]);
  const [changes, setChanges] = useState([]);
  const [loading, setLoading] = useState();
  const [runTime, setRunTime] = useState(0);

  const inputRef = useRef();
  const firstEl = outputArray[0];
  const len = outputArray.length;

  useEffect(() => {
    setLoading(false);
  }, [firstEl, len]);

  useEffect(() => {
    if (loading) {
      let newArr = randomArray;

      // Run transformations and calculate runtime
      var t0 = performance.now();
      changes.forEach((change, i) => {
        const { method, fn } = arrayChangingFunctions[change];
        newArr = newArr[method](fn);
      });
      var t1 = performance.now();
      setRunTime(t1 - t0);

      setOutputArray(newArr);
    }
  }, [loading, changes, randomArray]);

  function handleChanges(text) {
    setChanges([...changes, text]);
  }

  function createArray(num) {
    setRandomArray(
      new Array(parseInt(num, 10)).fill(null).map(() => makeRandomString(5))
    );
  }

  return (
    <div className="app">
      <h1>The Pointless App</h1>
      <p>
        Generate a random string array. Then add as many transformations as you
        want. You can add duplicates of the same transformation. Transformations
        will happen in the order they are added.
      </p>
      <div className="generate">
        <Button
          onClick={() => {
            createArray(inputRef.current.value);
          }}
        >
          Generate random array
        </Button>
        <label htmlFor="length">of length:</label>
        <input
          className="length"
          ref={inputRef}
          type="number"
          name="length"
          min="1"
          max="10000"
        />
        {!randomArray.length && <p className="warning">Array not generated</p>}
      </div>

      <hr />

      <h2 className="transformations">Transformations</h2>
      <ButtonList
        arrayChangingFunctions={arrayChangingFunctions}
        handleChanges={handleChanges}
      />
      <ChangeList changes={changes} />
      <Button
        className="applyButton"
        disabled={loading}
        onClick={() => {
          setLoading(true);
        }}
      >
        {loading ? "Applying your changes..." : "Apply changes to array"}
      </Button>
      <Results outputArray={outputArray} runTime={runTime} />
    </div>
  );
};

export default App;
