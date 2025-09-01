import computer_cat from "../assets/computer-cat.png"
import cat_type from "../assets/cat-type.gif"
import cat_type2 from "../assets/cat-type2.gif"
import Navbar from '../components/Navbar';
import arrow from '../assets/arrow.png';
import SplitText from '../components/SplitText';
import GlareHover from '../components/GlareHover';
import FuzzyText from "../components/FuzzyText";
import { useNavigate } from "react-router-dom";


export default function About() {
  document.body.style.backgroundColor = "#000E04";
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center w-full h-full bg-[#000E04]">
      <Navbar/>
      <div className="flex flex-col justify-center items-center h-screen text-white">
        <div className="flex text-4xl">Welcome to my AI Portfolio!</div>
        <div className="mt-4 text-2xl">To get started, ask any questions you may have for me in the input field on the home page.</div>
        <div className="text-2xl">Thanks for stopping by!</div>
      </div>
    </div>
  )
}