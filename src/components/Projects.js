export default function Project() {

    return(
        <>
            <div classNameName = "my-10">
                <h3 className="text-3xl py-1"> Skills</h3>
                <p className="text-md py-2 leading-8 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus massa enim, et ullamcorper mi rutrum ac. Suspendisse at dui urna. <span className="text-teal-500">Cras lorem tortor</span>, tincidunt vitae lacinia sed, feugiat in nunc.
                </p>
            </div> 

            <section className="flex">
            {/* Skils Cards  */}
            
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {/* card 1 */}
                <div className="rounded overflow-hidden shadow-lg ">
                    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                    <img
                        src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
                        class="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
                        alt=""
                    />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Tailwind</div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur .
                        </p>
                    </div>
                </div>
        {/* <!--Card 2--> */}
                <div className="rounded overflow-hidden shadow-lg">
                    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                    <img
                        src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
                        class="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
                        alt=""
                    />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">React</div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur.
                        </p>
                    </div>
                </div>

        {/* <!--Card 3--> */}
            <div className="rounded overflow-hidden shadow-lg">
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                <img
                        src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
                        class="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
                        alt=""
                    />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">MongoDB</div>
                    <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur 
                    </p>
                </div>
            </div>
        </div>
            
            {/* Skils Cards  ENDS */}   
        </section>

    </>
    )
    
}