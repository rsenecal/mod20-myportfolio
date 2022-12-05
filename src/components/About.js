import { 
    AiFillLinkedin,
    AiFillGithub, } from "react-icons/ai";
    

export default function About() {
    return(
        <section>
        <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-orange-600 font-medium">Roodolph Senecal</h2>
            <h3 className="text-2xl text-orange-300" py-2> Developer, Yoga Teacher</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus massa enim, et ullamcorper mi rutrum ac. Suspendisse at dui urna. Cras lorem tortor, tincidunt vitae lacinia sed, feugiat in nunc. Praesent nisi enim, consequat eget vulputate sed, vestibulum ut mi. Vestibulum lobortis velit nec odio imperdiet consectetur. Quisque eleifend lectus vel nisl efficitur consectetur. Proin sed libero consequat, pulvinar nisi vel, congue orci. Sed nec est tristique, tristique lacus in, bibendum arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam aliquam egestas diam, id tincidunt nulla lobortis tempus.
            </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillGithub />
        <AiFillLinkedin />
        </div>
        <div className="relative mx-auto bg-gradient-to-b justify-center from-yellow-300 to-red-300 rounded-full w-80 h-80 mt-20 overflow-hidden">
        <img src="/roody.png" alt="Roody" />
        </div>
    </section>
    )
}
