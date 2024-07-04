import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScreenData from "./components/ScreenData/ScreenData";
import ScreenForm from "./components/ScreenForm/ScreenForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScreenData />} />
        <Route path="/form" element={<ScreenForm />} />
        <Route path="/form/:index" element={<ScreenForm />} />
      </Routes>
    </Router>
  );
}

export default App;
