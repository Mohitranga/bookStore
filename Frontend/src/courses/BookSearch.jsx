import React from "react";
import Navbar from "../components/Navbar";
import Booksearch from "../components/Booksearch";
import Footer from "../components/Footer";
function BookSearch() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Booksearch />
      </div>
      <Footer />
    </>
  );
}

export default BookSearch;
