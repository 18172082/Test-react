// tests/App.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Asegúrate de que esta línea esté presente
import App from "../App";

test("renders the form and calculates the series correctly", () => {
  render(<App />);
  
  const input = screen.getByLabelText(/Introduce el valor de n/i); // Ajustar si es necesario
  const button = screen.getByText(/Calcular/i);

  fireEvent.change(input, { target: { value: "3" } });
  fireEvent.click(button);

  // Aquí agregas las validaciones esperadas
});

