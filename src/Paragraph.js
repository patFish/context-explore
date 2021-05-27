import React, { useContext } from "react";
import testContext from "./testContext";

const Paragraph = () => {
  const { status, togglePlayPause } = useContext(testContext);

  const handleClick = () => {
    togglePlayPause({ test: "string" });
  };

  return (
    <>
      <p>
        Edit <code>{JSON.stringify(status)}</code> and save to reload.
      </p>
      <button onClick={handleClick}>Hello</button>
    </>
  );
};

export default Paragraph;
