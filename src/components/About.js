import { 
    AiFillLinkedin,
    AiFillGithub, } from "react-icons/ai";

    
import roody from "../../src/img/roody.png"

export default function About({myRef}) {
    return(
        <section ref={el=> (myRef.current.About = el)} >
        
        <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-orange-600 font-medium">Roodolph Senecal</h2>
            {/* <h3 className="text-2xl text-orange-500 py-2"> Developer, Yoga Teacher</h3> */}
            <h1 className='text-xl  text-orange-600 py-2'>Yoga Teacher</h1>
            <p className="text-md py-5 leading-8 text-gray-800">
            Roody was born in the small village of Port Margot in the north of Haiti and emigrated to the US at the tender age of twelve. Upon exiting the airport building at JFK into cold February weather, his first thought was “why would so many people choose to live in an ice-box?”. He has been seeking the hot-box ever since. Roody first trained as an engineer, working for companies such as Karp Associates and Estee Lauder. He later purchased a manufacturing company and worked as a manufacturing consultant. He was introduced to yoga by his wife Jessica on their second date.
            </p>
            <h1 className='text-xl  text-orange-600 py-2'>Software Developer</h1>
            <p className="text-md py-5 leading-8 text-gray-800">
            Karmasoft started as a personal project. Roody coded the first version at the Insomnia Cafe in Los Angeles between 10 p.m. and 1 a.m. during Bikram’s yoga teacher training. The reason was simple: Roody wanted an intuitive, user-friendly software to run his yoga studio. Roody gave the desktop version to studio owners, and the idea caught on. When opening his second yoga studio in Brooklyn, New York, Roody decided to reboot Karmasoft as a modern, web-based system for a wider audience. He enlisted Dima as the CTO, and together they made Karmasoft’s web version a reality.
            </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <a href="https://github.com/rsenecal/" rel="noreferrer" target="_blank"><AiFillGithub /></a>
      
            <a href="https://www.linkedin.com/in/roodolph-senecal-a2757244/" rel="noreferrer" target="_blank"> <AiFillLinkedin /> </a>
     
        </div>
        <div className="relative mx-auto bg-gradient-to-b justify-center from-yellow-300 to-red-300 rounded-full w-80 h-80 mt-20 overflow-hidden">
        <img src={roody} alt="Roody"></img>
        </div>
    </section>
    )
}
