import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movieitem from "./Components/MovieDT/Movieitem";

import Homepage from "./Pages/Homepage";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/movie/:id" element={<Movieitem />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
