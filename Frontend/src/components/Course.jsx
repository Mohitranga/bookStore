import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const userDetails = localStorage.getItem('Users'); // Replace with your actual key
    if (!userDetails) {
      setIsLoggedIn(false);
      console.log("User is not logged in.");
    } else {
      setIsLoggedIn(true); // Set logged in if userDetails exist
    }
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const handleDownloadClick = (item) => {
    if (!isLoggedIn) {
      navigate("/signup"); // Redirect to login page
    } else {
      window.open(item.link, "_blank"); // Open the download link in a new tab
    }
  };

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          {/* Add a line below */}
          <p className="text-lg mt-4">
            Explore a variety of books and add your own to the collection.
          </p>
          {/* Button to route to Add Book page */}
          <button
            onClick={() => navigate("/addbook")}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300"
          >
            Add a Book
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards
              key={item.id}
              item={item}
              isLoggedIn={isLoggedIn}
              onDownloadClick={handleDownloadClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
