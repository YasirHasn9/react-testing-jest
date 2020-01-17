import React from "react";
import * as rtl from "@testing-library/react";
// override expect variable
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

// clean function so we dont have a memory leak
afterEach(rtl.cleanup);

test("<App /> testing", () => {
  const wrapper = rtl.render(<App />);
  wrapper.debug();
});
