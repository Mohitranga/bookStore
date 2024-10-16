import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function Freebook() {
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
        const res = await axios.get("https://bookstoreapp-xn5w.onrender.com/book");
        // console.log(res);

        const data = res.data;
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const handleDownloadClick = (item) => {
    if (!isLoggedIn) {
      navigate("/signup"); //Redirect to login page
    } else {
      window.open(item.link, "_blank"); //Open the download link in a new tab
    }
  };
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
        <h1 className="font-semibold text-xl pb-2">Recently Added Books</h1>
        <p className="text-sm md:text-lg">
          Explore our latest additions and find your next great read! From thrilling adventures to heartfelt stories, these books are sure to inspire and entertain. Dive into new worlds and discover exciting narratives that await you.
        </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} onDownloadClick={handleDownloadClick}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
