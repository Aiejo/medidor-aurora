import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cuestionario from "@/components/aurora/cuestionario";
import Admin from "@/components/aurora/admin";

const App: React.FC = () => {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Cuestionario />} />
        <Route path="/download" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
