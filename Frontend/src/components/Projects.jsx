import { useRef, useEffect } from "react";
import ProjectsScroll from "./ProjectsScroll";

export default function Projects() {
  return (
    <div className="flex flex-col w-full mb-4">
      <div className="text-white text-2xl font-semibold mb-2">My Projects</div>
      <ProjectsScroll />
    </div>
  );
}
