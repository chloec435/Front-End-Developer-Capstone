import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import BookingForm from "./components/BookingForm";

global.alert = jest.fn();

test("Renders Home component on '/' route", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole("heading", { name: /spotlight/i })).toBeInTheDocument();
});

test("Renders BookingPage component on '/booking' route", () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole("heading", { name: /book a table/i })).toBeInTheDocument();
});

test("Renders About component on '/about' route", () => {
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/about/i)).toBeInTheDocument();
});

test("BookingForm submits data and triggers alert", () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <App />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText(/select a date/i), {
    target: { value: "2025-06-15" },
  });
  fireEvent.change(screen.getByLabelText(/select a time/i), {
    target: { value: "18:00" },
  });
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "4" },
  });
  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Birthday" },
  });

  fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

  expect(global.alert).toHaveBeenCalledWith(expect.stringContaining("Number of guests: 4"));
  expect(global.alert).toHaveBeenCalledWith(expect.stringContaining("Date: 2025-06-15"));
  expect(global.alert).toHaveBeenCalledWith(expect.stringContaining("Time: 18:00"));
  expect(global.alert).toHaveBeenCalledWith(expect.stringContaining("Occasion: Birthday"));
});

test("BookingForm renders static text", () => {
  render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} />);

  expect(screen.getByText("Select a Date")).toBeInTheDocument();
  expect(screen.getByText("Select a Time")).toBeInTheDocument();
  expect(screen.getByText("Number of Guests")).toBeInTheDocument();
  expect(screen.getByText("Occasion")).toBeInTheDocument();
  expect(screen.getByDisplayValue("None")).toBeInTheDocument();
  expect(screen.getByDisplayValue("Make Your reservation")).toBeInTheDocument();
});