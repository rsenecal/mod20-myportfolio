
import { 
    FaReact } from "react-icons/fa";

import { SiTailwindcss, SiMongodb } from "react-icons/si"

export default function Skills({myRef}) {
    return(
        <section ref={el=> (myRef.current.Skills = el)} >
            <div  className = "my-10" >
                <h3 className="text-3xl py-1"> Skills </h3>
                <p className="text-md py-2 leading-8 text-gray-800">
                The most useful skill is one's ability to continue to learn, adapt, and change. The skills listed below are just what I'm in the process of learning right now with respect to software development. I have a wide range of experience from manufacturing to fitness and wellness. I have years of experience managing a remote team with various backgrounds and languages. <span className="text-teal-500">Cras lorem tortor</span>, tincidunt vitae lacinia sed, feugiat in nunc.
                </p>
            </div> 

            <section className="flex">
            {/* Skils Cards  */}
            
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 bg-gradient-to-t  from-yellow-300 to-red-300">
                {/* card 1 */}
                <div className="rounded overflow-hidden shadow-lg  bg-cyan-50">
                    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                    <SiTailwindcss />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Tailwind</div>
                        <p className="text-gray-700 text-base">
                        Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like <span className="text-blue-400">flex, pt-4, text-center</span> and <span className="text-blue-400">rotate-90</span> that can be composed to build any design, directly in your markup.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CSS</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Responsive</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Figmar</span>
                    </div>
                </div>
        {/* <!--Card 2--> */}
                <div className="rounded overflow-hidden shadow-lg  bg-cyan-50">
                    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                    <FaReact />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">React</div>
                        <p className="text-gray-700 text-base">
                        React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Moment</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Webpack</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Express</span>
                    </div>
                </div>

        {/* <!--Card 3--> */}
            <div className="rounded overflow-hidden shadow-lg  bg-cyan-50">
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                <SiMongodb />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">MongoDB</div>
                    <p className="text-gray-700 text-base">
                    MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. 
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mongoose</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Atlas</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Compas</span>
                </div>
            </div>
        </div>
            
            {/* Skils Cards  ENDS */}   
        </section>

    </section>
    )
}