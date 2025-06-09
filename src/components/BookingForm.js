import React from 'react';
import { useState } from 'react';
import './BookingForm.css';

export default function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("None");

  console.log("availableTimes", availableTimes);

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `Reservation Information:\n` +
      `Number of guests: ${guests}\n` +
      `Date: ${date}\n` +
      `Time: ${time}\n` +
      `Occasion: ${occasion}`
    );
  }

  function handleDateChange(e) {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: "updateTime", date: newDate });
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div><h2><label htmlFor="res-date">Select a Date</label></h2></div>

      <div>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />
      </div>

      <div><h2><label htmlFor="res-time">Select a Time</label></h2></div>

      <div>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
            availableTimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))
          ) : (
            <option disabled>No times available</option>
          )}
        </select>
      </div>
      
      <div><h2><label htmlFor="guests">Number of Guests</label></h2></div>

      <div>
        <input
          type="number"
          id="guests"
          min="1"
          max="100"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        {guests > 100 && (
          <p>
            Warning: Maximum number of guests exceeded.
          </p>
        )}
      </div>

      <div><h2><label htmlFor="occasion">Occasion</label></h2></div>

      <div>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <div id="reservation"><input type="submit" value="Make Your Reservation" /></div>
    </form>
  );
}
