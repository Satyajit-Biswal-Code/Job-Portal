import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

 
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }


  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    console.log("Form Data:", form);

    setSuccess("Message sent successfully ✅");

   
    setForm({
      name: "",
      email: "",
      message: "",
    });

    
    setTimeout(() => setSuccess(""), 3000);
  }

  return (
    <div className="flex justify-center items-center px-4 mt-10">
      <form
        onSubmit={handleSubmit}
        className="
        mb-7
          w-full 
          max-w-lg 
          flex flex-col gap-4
          border border-white/30 
          p-5 md:p-8
          rounded-xl 
          bg-black/40 
          backdrop-blur
          shadow-lg
        ">
        <h2 className="text-center text-xl md:text-2xl font-bold mb-2">
          Contact Us
        </h2>

       
        <div className="relative">
          <FaUser className="absolute top-3 left-3 text-gray-300" />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full pl-10 p-2 rounded-lg border text-black"
          />
        </div>

       
        <div className="relative">
          <FaEnvelope className="absolute top-3 left-3 text-gray-300" />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full pl-10 p-2 rounded-lg border text-black"
          />
        </div>

       
        <div className="relative">
          <FaCommentDots className="absolute top-3 left-3 text-gray-300" />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="4"
            className="w-full pl-10 p-2 rounded-lg border text-black resize-none"
          />
        </div>

       
        <button
          type="submit"
          className="
            bg-blue-500 
            hover:bg-blue-600 
            transition
            p-2 
            w-full md:w-40
            mx-auto
            font-medium 
            text-white 
            rounded-full
          ">
          Submit
        </button>

    
        {success && (
          <p className="text-green-400 text-center font-medium">{success}</p>
        )}
        
      </form>
    </div>
  );
}
