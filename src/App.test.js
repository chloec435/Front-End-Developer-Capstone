import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

global.alert = jest.fn();

describe("App routing and BookingForm behavior", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders Home component on default route '/'", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: /spotlight/i })).toBeInTheDocument();
  });

  test("renders BookingPage component on '/booking' route", () => {
    render(
      <MemoryRouter initialEntries={["/booking"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: /book a table/i })).toBeInTheDocument();
  });

  test("renders About component on '/about' route", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  test("BookingForm submits correct data and shows alert", () => {
    render(
      <MemoryRouter initialEntries={["/booking"]}>
        <App />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/select a date/i);
    fireEvent.change(dateInput, { target: { value: "2025-06-15" } });

    const timeSelect = screen.getByLabelText(/select a time/i);
    fireEvent.change(timeSelect, { target: { value: "18:00" } });

    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: "4" } });

    const occasionSelect = screen.getByLabelText(/occasion/i);
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    const submitBtn = screen.getByRole("button", { name: /make your reservation/i });
    fireEvent.click(submitBtn);

    expect(global.alert).toHaveBeenCalledWith(
      expect.stringContaining("Number of guests: 4")
    );
    expect(global.alert).toHaveBeenCalledWith(
      expect.stringContaining("Date: 2025-06-15")
    );
    expect(global.alert).toHaveBeenCalledWith(
      expect.stringContaining("Time: 18:00")
    );
    expect(global.alert).toHaveBeenCalledWith(
      expect.stringContaining("Occasion: Birthday")
    );
  });
});
