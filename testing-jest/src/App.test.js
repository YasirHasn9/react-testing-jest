import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("App" , () => {
  const wrapper =  rtl.render(<App />)
  const e = wrapper.getByText(/testing the snapshot\/jest/i)
  expect(e).toBeVisible()

})

test("snapshot test" , () => {
  const wrapper = rtl.render(<App />)
  expect(wrapper.asFragment()).toMatchSnapshot()
})
