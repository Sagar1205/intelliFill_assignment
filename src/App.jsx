import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'
import ExamDetailsPage from "./pages/ExamDetailsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/e" element={<ExamDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App