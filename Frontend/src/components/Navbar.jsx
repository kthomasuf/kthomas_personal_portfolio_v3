import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToAbout = () => {
    navigate("/about");
  };

  const contactButtonClick = () => {
    navigate("/chat?query=How can I contact you?");
  };

  return (
    <div className="flex justify-between items-center fixed w-[80rem] h-16 top-0 z-10 p-8 mt-4 font-poppins text-lg bg-[#6d962a]/10 border border-[#223923] rounded-xl">
      <button className="text-3xl p-2 text-white text-bold cursor-pointer" onClick={goToHome}>KT</button>
      <div className="text-2xl text-white">
        <button className="mr-8 cursor-pointer" onClick={goToAbout}>about</button>
        <button className="mr-8 cursor-pointer" onClick={contactButtonClick}>contact</button>
        <a href="https://drive.google.com/file/d/1V_u5mL1BBf9xJeNrv69ze1mlOYuk-1-U/view?usp=sharing" target="_blank" className="cursor-pointer">resume</a>
      </div>
    </div>
  )
}