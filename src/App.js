import './App.css';
import BookingPage from './BookingPage.js';
import Home from './Home.js';
import About from './About.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './Counter.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
