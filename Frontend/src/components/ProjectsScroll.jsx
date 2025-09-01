import { useRef, useEffect } from "react";
import wildfire from "../assets/wildfire.jpeg";
import aiporfolio from "../assets/aiportfolio.png";
import raspberrypi from "../assets/raspberrypi.png";
import minesweeper from "../assets/minesweeper.png";
import oldportfolio from "../assets/oldportfolio.png";

export default function ProjectsScroll() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Map vertical wheel scroll to horizontal
    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div ref={scrollRef} className="w-full flex gap-4 overflow-x-auto scrollbar-hide no-scrollbar select-none mb-4">
      <div className="flex relative shrink-0 w-[15rem] h-[22rem] rounded-xl cursor-pointer">
        <img className="w-full h-full object-cover rounded-xl" src={aiporfolio} />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-black/70 rounded-lg" />
        <div className="flex absolute top-4 left-4 text-white font-semibold">AI Portfolio</div>
        <div className="flex absolute bottom-4 left-4 gap-1.25">
          <div className="flex px-2 rounded-xl bg-[#243c24]">AWS</div>
          <div className="flex px-2 rounded-xl bg-[#243c24]">OpenAI</div>
          <div className="flex px-2 rounded-xl bg-[#243c24]">React</div>
        </div>
      </div>
      <div className="flex relative shrink-0 w-[15rem] h-[22rem] rounded-xl cursor-pointer">
        <img className="w-full h-full object-cover rounded-xl" src={wildfire} />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-black/70 rounded-lg" />
        <div className="flex absolute top-4 left-4 text-white font-semibold">Modeling Wildfire Susceptibility with Binomial Linear Models</div>
        <div className="flex absolute bottom-4 left-4 gap-1.25">
          <div className="flex px-2 rounded-xl bg-[#243c24]">R</div>
          <div className="flex px-2 rounded-xl bg-[#243c24]">ArcGIS Pro</div>
        </div>
      </div>
      <div className="flex relative shrink-0 w-[15rem] h-[22rem] rounded-xl cursor-pointer">
        <img className="w-full h-full object-cover rounded-xl" src={raspberrypi} />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-black/70 rounded-lg" />
        <div className="flex absolute top-4 left-4 text-white font-semibold">Mini Weather Station</div>
        <div className="flex absolute bottom-4 left-4 gap-1.25">
          <div className="flex px-2 rounded-xl bg-[#243c24]">Raspberry PI</div>
          <div className="flex px-2 rounded-xl bg-[#243c24]">Python</div>
        </div>
      </div>
      <div className="flex relative shrink-0 w-[15rem] h-[22rem] rounded-xl cursor-pointer">
        <img className="w-full h-full object-cover rounded-xl" src={minesweeper} />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-black/70 rounded-lg" />
        <div className="flex absolute top-4 left-4 text-white font-semibold">Minesweeper</div>
        <div className="flex absolute bottom-4 left-4 gap-1.25">
          <div className="flex px-2 rounded-xl bg-[#243c24]">C++</div>
          <div className="flex px-2 rounded-xl bg-[#243c24]">SFML Library</div>
        </div>
      </div>
      <div className="flex relative shrink-0 w-[15rem] h-[22rem] rounded-xl cursor-pointer">
        <img className="w-full h-full object-cover rounded-xl" src={oldportfolio} />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-black/70 rounded-lg" />
        <div className="flex absolute top-4 left-4 text-white font-semibold">Old Portfolio</div>
        <div className="flex absolute bottom-4 left-4 gap-1.25">
          <div className="flex px-2 rounded-xl bg-[#243c24]">React</div>
          <div className="flex px-2 rounded-xl bg-[#243c24]">SFML Library</div>
        </div>
      </div>
    </div>
  );
}
