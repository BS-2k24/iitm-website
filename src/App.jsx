import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Verify, Home } from "./sections";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </Router>
  );
}

export default App;
