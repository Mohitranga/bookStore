import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import BookSearch from "./courses/BookSearch";
import Signup from "./components/Signup";
import Contact from "./contact/Contact";
import About from "@/about/About";
import Addbook from "./components/Addbook";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/books"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<BookSearch />} />
          <Route path="/addbook" element={<Addbook />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
