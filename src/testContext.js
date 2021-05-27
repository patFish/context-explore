import { createContext } from "react";

const testContext = createContext({
  status: "paused",
  togglePlayPause: () => {},
});

export default testContext;
