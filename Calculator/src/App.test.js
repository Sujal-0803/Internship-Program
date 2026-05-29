import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import BookingForm from "./pages/BookingForm";
import Success from "./pages/Success";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/movie/:id" element={<MovieDetails />} />

        <Route path="/book/:id" element={<BookingForm />} />

        <Route path="/success" element={<Success />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;