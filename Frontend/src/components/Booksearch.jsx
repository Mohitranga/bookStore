import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Cards from "./Cards";
import axios from 'axios';

function Booksearch() {
  const location = useLocation();
  const [books, setBooks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const searchTerm = location.state?.searchTerm || ''; // Get the search term from the state

  useEffect(() => {

    const userDetails = localStorage.getItem('Users'); // Replace with your actual key
    if (!userDetails) {
      setIsLoggedIn(false);
      console.log("User is not logged in.");
    } else {
      setIsLoggedIn(true); // Set logged in if userDetails exist
    }

    const fetchBooks = async () => {
      
      if (searchTerm) {
        try {
          const response = await axios.get(`http://localhost:4001/book/find/?name=${searchTerm}`);
          setBooks(response.data);
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      }
    };
    fetchBooks();
    }, [searchTerm]);

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
          {/* <p className="mt-12">
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link> */}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        <h1 className="text-2xl font-bold mb-4">Search Results for "{searchTerm}"</h1>
            {books.length > 0 ? (
                <ul>
                {books.map((item) => (
                    <Cards key={item.id} item={item} onDownloadClick={handleDownloadClick}/>
                ))}
                </ul>
            ) : (
                <p>No books found for "{searchTerm}".</p>
            )}
        </div>
      </div>
    </>
  );
}

export default Booksearch;
