import React, { useState } from "react";
import { Lists } from "./Lists";
import { IoMdSearch } from "react-icons/io";
import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBill,
} from "react-icons/fa";

export default function Jobs() {
  const [check, setCheck] = useState(Lists);
  const [save, setSave] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [search, setSearch] = useState("");

  
  function saving(job) {
    const alreadySaved = save.find((item) => item.Title === job.Title);
    if (!alreadySaved) {
      setSave([...save, job]);
    }
  }


  function view(job) {
    setSelectedJob(job);
  }

  function close() {
    setSelectedJob(null);
  }

 
  const filteredJobs = check.filter(
    (job) =>
      job.Title.toLowerCase().includes(search.toLowerCase()) ||
      job.Company.toLowerCase().includes(search.toLowerCase()) ||
      job.Location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
    
      <div className="relative mb-5">
        <IoMdSearch className="absolute top-3 left-3 text-gray-500 text-xl" />
        <input
          type="text"
          placeholder="Search by title, company, location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 p-2 border-2 rounded-lg text-black"
        />
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredJobs.length === 0 ? (
          <p>No jobs found</p>
        ) : (
          filteredJobs.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 border rounded-xl p-4 shadow-md hover:shadow-xl transition bg-white text-black">
              <p className="flex items-center gap-2">
                <FaBriefcase className="text-blue-500" />
                <span className="font-semibold">{item.Title}</span>
              </p>

              <p className="flex items-center gap-2">
                <FaBuilding className="text-purple-500" />
                {item.Company}
              </p>

              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                {item.Location}
              </p>

              <p className="flex items-center gap-2">
                <FaMoneyBill className="text-green-500" />
                {item.Salary}
              </p>

              <button
                onClick={() => view(item)}
                className="p-2 bg-green-400 text-white rounded-lg mt-2 hover:bg-green-500">
                View
              </button>

              <button
                onClick={() => saving(item)}
                className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500">
                Save
              </button>
            </div>
          ))
        )}
      </div>

      
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-3">Saved Jobs</h2>

        {save.length === 0 ? (
          <p>No jobs saved</p>
        ) : (
          save.map((job, index) => (
            <div
              key={index}
              className="border p-3 mb-2 rounded bg-white text-black hover:scale-100">
              <p className="flex gap-2 items-center">
                <FaBriefcase /> {job.Title}
              </p>
              <p className="flex gap-2 items-center">
                <FaBuilding /> {job.Company}
              </p>
              <p className="flex gap-2 items-center">
                <FaMapMarkerAlt /> {job.Location}
              </p>
              <p className="flex gap-2 items-center">
                <FaMoneyBill /> {job.Salary}
              </p>
            </div>
          ))
        )}
      </div>


      {selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white text-black rounded-xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-3">{selectedJob.Title}</h2>

            <p>
              <b>Company:</b> {selectedJob.Company}
            </p>
            <p>
              <b>Location:</b> {selectedJob.Location}
            </p>
            <p>
              <b>Salary:</b> {selectedJob.Salary}
            </p>


            <button
              onClick={close}
              className="mt-4 w-full bg-red-400 text-white p-2 rounded-lg hover:bg-red-500">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
