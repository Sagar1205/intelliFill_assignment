import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExamDetailsHome from "../components/ExamDetailsHome";

function ExamDetailsPage() {
  return (
    <>
      <div className="flex flex-col justify-between items-center min-h-screen">
        <Navbar />
        <ExamDetailsHome />
        <Footer />
      </div>
    </>
  );
}

export default ExamDetailsPage;
