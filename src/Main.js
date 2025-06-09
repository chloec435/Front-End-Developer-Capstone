import React from 'react';
import { useReducer } from 'react';
import BookingForm from './BookingForm';

const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
  return state;
}

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  return (
    <main>
      <h1>Book a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}
