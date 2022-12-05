
import { 
    FaJava } from "react-icons/fa";

export default function Skills() {

    return(
        <>
            <div classNameName = "my-10">
                <h3 className="text-3xl py-1"> Skills</h3>
                <p className="text-md py-2 leading-8 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus massa enim, et ullamcorper mi rutrum ac. Suspendisse at dui urna. <span className="text-teal-500">Cras lorem tortor</span>, tincidunt vitae lacinia sed, feugiat in nunc.
                </p>
            </div> 

            <section className="flex">
            {/* Skils Cards  */}
            
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 bg-gradient-to-t  from-yellow-300 to-red-300">
                {/* card 1 */}
                <div className="rounded overflow-hidden shadow-lg  bg-cyan-50">
                    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                    <FaJava />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Tailwind</div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
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
                    <FaJava />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">React</div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
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
                <FaJava />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">MongoDB</div>
                    <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
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

    </>
    )
}