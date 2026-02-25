import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="container min-h-screen bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
        <div className="flex flex-col items-center justify-center h-screen text-white">
          <h2 className="text-2xl font-bold md:text-5xl">Find Your Own Jobs</h2>

          <button className="p-1 md:p-2 mt-3.5 flex items-center gap-2 font-medium border-2 border-white rounded-2xl bg-white text-black hover:scale-110 transition">
            Explore more <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
