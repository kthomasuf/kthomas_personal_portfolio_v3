import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from "react-router-dom";
import computer_cat from "../assets/computer-cat.png"
import cat_type from "../assets/cat-type.gif"
import cat_type2 from "../assets/cat-type2.gif"
import Navbar from '../components/Navbar';
import arrow from '../assets/arrow.png';
import SplitText from '../components/SplitText';
import GlareHover from '../components/GlareHover';
import GradientText from "../components/GradientText";
import InOutBox from '../components/InOutBox';
import StaggeredWords from '../components/StaggeredWords';
import kthomas from "../assets/KennyThomas.jpg";
import circle from "../assets/circle.png"
import Bio from '../components/Bio';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Chat() {
  document.body.style.backgroundColor = "#000E04";
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const [searchParams] = useSearchParams();
  const input = searchParams.get("query");

  const [showBio, setShowBio] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showFun, setShowFun] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    if (input) {
      if (input.trim() === "Tell me about yourself") {
        showBioSection();
      }
      else if (input.trim() === "What are your skills?") {
        showSkillsSection();
      }
      else if (input.trim() === "What projects have you worked on?") {
        showProjectsSection();
      }
      else if (input.trim() === "What do you do for fun?") {
        showFunSection();
      }
      else if (input.trim() === "How can I contact you?") {
        showContactSection();
      }
      setQuery(input);
      sendToBackend(input);
    }
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setQuery(e.target.value);
      sendToBackend(e.target.value);

      setShowBio(false);
      setShowSkills(false);
      setShowProjects(false);
      setShowFun(false);
      setShowContact(false);
    }
  }

  const sendToBackend = async (message) => {
    if (!message || !message.trim()) return;

    try {
      const response = await fetch("http://localhost:5001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
      });
      const data = await response.json();
      setResponse(data.reply);
      console.log("Response from backend:", data.reply);
    }
    catch (error) {
      console.error("Error sending query to backend:", error);
      setResponse("An error occurred while processing your request.");
    }
  }

  const showBioSection = () => {
    setQuery("Tell me about yourself")
    sendToBackend("Tell me about yourself");

    setShowBio(true);
    setShowSkills(false);
    setShowProjects(false);
    setShowFun(false);
    setShowContact(false);
  }

  const showSkillsSection = () => {
    setQuery("What are your skills?")
    sendToBackend("What are your skills?");

    setShowBio(false);
    setShowSkills(true);
    setShowProjects(false);
    setShowFun(false);
    setShowContact(false);
  }

  const showProjectsSection = () => {
    setQuery("What projects have you worked on?")
    sendToBackend("What projects have you worked on?");

    setShowBio(false);
    setShowSkills(false);
    setShowProjects(true);
    setShowFun(false);
    setShowContact(false);
  }

  const showFunSection = () => {
    setQuery("What do you do for fun?")
    sendToBackend("What do you do for fun?");

    setShowBio(false);
    setShowSkills(false);
    setShowProjects(false);
    setShowFun(true);
    setShowContact(false);
  }

  const showContactSection = () => {
    setQuery("How can I contact you?")
    sendToBackend("How can I contact you?");

    setShowBio(false);
    setShowSkills(false);
    setShowProjects(false);
    setShowFun(false);
    setShowContact(true);
  } 

  return (
    <div className="flex justify-center w-full h-full bg-[#000E04]">
      <Navbar/>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="relative mt-26 flex flex-col items-center w-[56rem] h-[38rem] text-white text-xl overflow-y-auto">
          <div className="flex justify-end w-full">
            <InOutBox text={query}/>
          </div>
          { showBio && (
              <Bio />
          )}
          { showSkills && (
              <Skills />
          )}
          { showProjects && (
            <Projects />
          )}
          { showContact && (
            <Contact />
          )}
          <StaggeredWords
            key={response + query}
            text={response}
            perWord={75}
            initialDelay={200}
            className="flex justify-start w-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full text-white mt-16">
          <div className="flex justify-center items-center w-[56rem] p-2 border border-[#223923] rounded-xl">
            <input className="font-poppins text-xl w-[50rem] p-2 mr-4 focus:outline-none placeholder-white" placeholder="Ask me anything!" onKeyDown={handleKeyDown}/>
            <button className="flex justify-center items-center w-12 h-12 p-2 bg-[#223923] border border-[#3a3a3a] rounded-xl cursor-pointer">
              <img className="ml-0.5 w-max-full h-max-full object-contain rotate-270 invert select-none pointer-events-none" src={arrow}/>
            </button>
          </div>
          <div className="flex justify-center items-center w-[56rem]">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-5 mt-6 font-poppins">
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
                <button className="flex justify-center items-center w-full h-full rounded-xl cursor-pointer" onClick={showBioSection}>Me</button>
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
                <button className="flex justify-center items-center w-full h-full rounded-xl cursor-pointer" onClick={showSkillsSection}>Skills</button>
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
                <button className="flex justify-center items-center w-full h-full rounded-xl cursor-pointer" onClick={showProjectsSection}>Projects</button>
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
                <button className="flex justify-center items-center w-full h-full rounded-xl cursor-pointer" onClick={showFunSection}>Fun</button>
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
                <button className="flex justify-center items-center w-full h-full rounded-xl cursor-pointer" onClick={showContactSection}>Contact</button>
              </GlareHover>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}