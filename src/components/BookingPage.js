import React from 'react';
import { useReducer } from 'react';
import BookingForm from './BookingForm.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './BookingForm.css';

const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function updateTimes(state, action) {
  if (action.type === "updateTime") {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
  return state;
}

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  return (
    <main>
      <>
       <Header />
      </>
      <div id="heading"><h1>Book a Table</h1></div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <>
        <Footer />
      </>
    </main>
  );
}
