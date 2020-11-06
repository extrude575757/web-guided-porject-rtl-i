import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders App without errors', () => {
  render(<App />);
})


test('render App without errors', () =>{
  render(<App />);
  const header = screen.getByText(/Add new Animal/i);
  console.log(header);


  // Add in npm test to start test
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).toHaveTextContent(/add new animal/i);
  expect(header).not.toHaveTextContent(/elections are dumb/i);
  expect(header).not.toBeFalsy();

})