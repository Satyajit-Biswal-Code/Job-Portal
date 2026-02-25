import { useState } from "react";
import "./App.css";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import Jobs from "./Jobs.jsx";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-white">
      <nav className="flex items-center justify-between px-4 md:px-10 py-4 font-bold">
        <div className="text-lg md:text-2xl">JOBS..</div>

        <div className="hidden md:flex gap-8 text-lg">
          <p className="cursor-pointer hover:underline">Home</p>
          <p className="cursor-pointer hover:underline">Jobs</p>
          <p className="cursor-pointer hover:underline">Saved Job</p>
          <p className="cursor-pointer hover:underline">Contact</p>
        </div>

        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 font-semibold bg-black/30 backdrop-blur">
          <p className="cursor-pointer hover:underline">Home</p>
          <p className="cursor-pointer hover:underline">Jobs</p>
          <p className="cursor-pointer hover:underline">Saved Job</p>
          <p className="cursor-pointer hover:underline">Contact</p>
        </div>
      )}

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6">
        <Home />
        <Jobs />
        <Contact />
      </main>

      <footer className="flex justify-center items-center text-center px-4 py-3 mt-6 border-t border-white/30 bg-black/40 backdrop-blur">
        <div className="flex justify-center items-center gap-4 ">
          <p className="text-lg">For More Info:-</p>
          <FaInstagram className="text-2xl"/>
          <FaFacebookSquare className="text-2xl" />
          <IoLogoLinkedin className="text-2xl" />
        </div>
      </footer>
    </div>
  );
}

export default App;
