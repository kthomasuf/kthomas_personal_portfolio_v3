import PixelTrail from "../components/PixelTrail"
import Navbar from "../components/Navbar"
import Aurora from "../components/Aurora"
import SplitText from '../components/SplitText';
import cat_type from "../assets/cat-type.gif"
import arrow from '../assets/arrow.png';
import FaultyTerminal from "../components/FaultyTerminal";
import TextType from "../components/TextType";

export default function Test() {
  return (
    <div className="flex justify-center w-full h-screen bg-[#171719]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <FaultyTerminal
          scale={2.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.2}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={0.5}
          flickerAmount={0.1}
          noiseAmp={1}
          curvature={0.1}
          tint="#3DDC84"
          mouseReact={true}
          mouseStrength={0.2}
          pageLoadAnimation={false}
          brightness={0.05}
        />
      </div>
      <div className="flex justify-center text-white z-1">
        <div className="w-[70rem] h-screen">
          <div className="flex flex-col mt-12">
            <TextType
              className="font-vt text-4xl text-[#3DDC84]"
              text={["> System Booting..."]}
              typingSpeed={75}
              showCursor={false}
              cursorCharacter="|"
              loop={false}
              textColors={['#ffffff']}
            />
            <TextType
              className="font-vt text-4xl"
              text={["> Welcome to Kenny's AI Portfolio"]}
              typingSpeed={75}
              initialDelay={2500}
              showCursor={false}
              loop={false}
              textColors={['#3DDC84']}
            />
          </div>

        </div>
        {/* <Navbar/>
        <div className="flex flex-col justify-center items-center w-[86rem] h-screen">
          <div className="flex flew-row justify-center items-center mt-12">
            <div className="flex justify-center items-center w-full text-white">
              <div className="flex justify-center items-center p-8">
                <img className="object-contain w-[30rem] h-[30rem] select-none pointer-events-none" src={cat_type}></img>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 text-white font-poppins">
                <SplitText
                    text="Hi! I'm Kenny"
                    className="text-6xl py-3 font-semibold"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="left"
                />
              <div className='flex flex-row'>
                <span className="text-[#DBDBDB] py-2 text-2xl font-medium mt-4">CS Graduate Student @ The Univerisity of Florida</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full text-white mt-16">
            <div className="flex justify-center items-center bg-sp-gray p-2.5 border border-[#3a3a3a] rounded-xl">
              <input className="font-poppins text-xl w-[40rem] p-2 mr-4 focus:outline-none" placeholder="Ask me anything..."/>
              <button className="flex justify-center items-center w-12 h-12 p-2 bg-sky-700 border border-[#3a3a3a] rounded-xl">
                <img className="ml-0.5 w-max-full h-max-full object-contain rotate-270 invert select-none pointer-events-none" src={arrow}/>
              </button>
            </div>
            <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-5 mt-6">
              <div className="flex justify-center items-center bg-sp-gray p-12 border border-[#3a3a3a] rounded-xl">Me</div>
              <div className="flex justify-center items-center bg-sp-gray p-12 border border-[#3a3a3a] rounded-xl">Skills</div>
              <div className="flex justify-center items-center bg-sp-gray p-12 border border-[#3a3a3a] rounded-xl">Projects</div>
              <div className="flex justify-center items-center bg-sp-gray p-12 border border-[#3a3a3a] rounded-xl">Fun</div>
              <div className="flex justify-center items-center bg-sp-gray p-12 border border-[#3a3a3a] rounded-xl">Contact</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}