import React from "react";
import StaggeredWords from '../components/StaggeredWords';
import kthomas from "../assets/KennyThomas.jpg";
import circle from "../assets/circle.png";

export default function Bio() {
  return (
    <div className="flex justify-start w-full mb-4">
      <div className="w-1/2 h-auto mr-8">
        <img className="rounded-xl pointer-events-none" src={kthomas}/>
      </div>
      <div className="flex flex-col w-full">
        <StaggeredWords
          text="Kenny Thomas"
          perWord={100}
          initialDelay={200}
          className="text-4xl font-semibold mb-2"
        />
        <div className="flex flex-row mb-2">
          <StaggeredWords
            text="22 years old"
            perWord={100}
            initialDelay={220}
            className="opacity-80"
          />
          <div className="flex justify-center items-center w-2 h-auto mx-4 object-contain">
            <img className="invert opacity-80 pointer-events-none opacity-0 animate-[fadeInUp_0.6s_ease_forwards] [animation-delay:0.1s]" src={circle}/>
          </div>
          <StaggeredWords
            text="Gainesville, Florida"
            perWord={100}
            initialDelay={350}
            className="opacity-80"
          />
        </div>
        <StaggeredWords
          text="Hi, I'm Kenny! I'm a grad student at UF working on my master's in Computer Science. I enjoy frontend development, cloud engineering, and building projects that challenge me to learn new tools and ideas."
          perWord={75}
          initialDelay={250}
        />
      </div>
    </div>
  )
}