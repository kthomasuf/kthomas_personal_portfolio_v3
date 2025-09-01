import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import computer_cat from "../assets/computer-cat.png"
import cat_type from "../assets/cat-type.gif"
import cat_type2 from "../assets/cat-type2.gif"
import Navbar from '../components/Navbar';
import arrow from '../assets/arrow.png';
import SplitText from '../components/SplitText';
import GlareHover from '../components/GlareHover';
import GradientText from "../components/GradientText";
import QueryBox from '../components/QueryBox';

export default function Home() {
  document.body.style.backgroundColor = "#000E04";
  const navigate = useNavigate();

  const meButtonClick = () => {
    navigate("/chat?query=Tell me about yourself");
  };

  const skillsButtonClick = () => {
    navigate("/chat?query=What are your skills?");
  };

  const projectsButtonClick = () => {
    navigate("/chat?query=What projects have you worked on?");
  };

  const funButtonClick = () => {
    navigate("/chat?query=What do you do for fun?");
  };

  const contactButtonClick = () => {
    navigate("/chat?query=How can I contact you?");
  };

  return (
    <div className="flex justify-center w-full h-full bg-[#000E04]">
      <Navbar/>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="relative mt-26 flex flex-col items-center w-[80rem] h-[38rem] bg-[#6d962a] rounded-xl overflow-hidden">
          <div className="flex justify-center w-full h-[18rem]">
            <SplitText
              text="KENNY THOMAS"
              className="text-[#DBE8A8] text-[14rem] font-antonio font-extrabold"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
          <img className="absolute -bottom-40 left-30 object-contain w-[40rem] h-[40rem] select-none pointer-events-none" src={cat_type}></img>
            <div className="flex justify-end items-end w-full h-full">
              <div className='flex flex-col justify-end items-end font-antonio'>
                <span className="text-[#042C0E] text-2xl text-right font-medium mr-6">CS Graduate Student</span>
                <span className="text-[#042C0E] text-2xl text-right font-medium mb-6 mr-6">@ The Univerisity of Florida</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full text-white mt-16">
          <div className="flex justify-center items-center w-[56rem] p-2 border border-[#223923] rounded-xl">
            <QueryBox/>
            <button className="flex justify-center items-center w-12 h-12 p-2 bg-[#223923] border border-[#3a3a3a] rounded-xl cursor-pointer">
              <img className="ml-0.5 w-max-full h-max-full object-contain rotate-270 invert select-none pointer-events-none" src={arrow}/>
            </button>
          </div>
          <div className="grid w-[56rem] grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-5 mt-6 font-poppins">
              <GlareHover
                width="100%"
                height="6rem"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                background=""
                borderColor="#223923"
                className="bg-[#6d962a]/10"
              >
                <button className="flex justify-center items-center w-full h-full rounded-xl cursor-pointer" onClick={meButtonClick}>Me</button>
              </GlareHover>
              <GlareHover
                width="100%"
                height="6rem"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                background=""
                borderColor="#223923"
                className="bg-[#6d962a]/10"
              >
                <button className="flex justify-center items-center w-full h-full rounded-xl cursor-pointer" onClick={skillsButtonClick}>Skills</button>
              </GlareHover>
              <GlareHover
                width="100%"
                height="6rem"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                background=""
                borderColor="#223923"
                className="bg-[#6d962a]/10"
              >
                <button className="flex justify-center items-center w-full h-full rounded-xl cursor-pointer" onClick={projectsButtonClick}>Projects</button>
              </GlareHover>
              <GlareHover
                width="100%"
                height="6rem"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                background=""
                borderColor="#223923"
                className="bg-[#6d962a]/10"
              >
                <button className="flex justify-center items-center w-full h-full rounded-xl cursor-pointer" onClick={funButtonClick}>Fun</button>
              </GlareHover>
              <GlareHover
                width="100%"
                height="6rem"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                background=""
                borderColor="#223923"
                className="bg-[#6d962a]/10"
              >
                <button className="flex justify-center items-center w-full h-full rounded-xl cursor-pointer" onClick={contactButtonClick}>Contact</button>
              </GlareHover>
          </div>
        </div>
      </div>
    </div>
  )
}