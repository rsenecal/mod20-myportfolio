

    import mfd from "../../src/img/mfd.png"
    import safemed from "../../src/img/safemed.png"
    import social from "../../src/img/sm-api.png"


export default function Project({myRef}) {


    return(
        <section ref={el=> (myRef.current.Projects = el)} >
             <div  className = "my-10">
                <h3 className="text-3xl py-1"> Projects</h3>
                <p className="text-md py-2 leading-8 text-gray-800">
                Every project is unique, from the initial concept to the deployment the focus is always on your project. I welcome changes. Below are a few of my recent projects. Please check the apps or the GitHub repo. 
                </p>
            </div> 

            <section className="flex">
            {/* Skils Cards  */}
            
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {/* card 1 */}
                <div className="rounded overflow-hidden shadow-lg bg-gray-100">
                    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                    <img
                        src={mfd}
                        className="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-sm hover:shadow-xl px-10"
                        alt=""
                    />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Marvel for Dummies</div>
                        <p className="text-gray-700 text-base">
                        As a Marvel fan, this was a very fun project. Marvel novices can search for any marvel character and quickly get a super detailed description of the character as well as a list of all the comics the character was featured in.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <a href="https://github.com/rsenecal/marvel-for-dummies" rel="noreferrer" target="_blank"><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-orange-500 hover:bg-orange-300">#Github Repo</span></a>

                        <a href="https://malvinah.github.io/marvel-for-dummies/" rel="noreferrer" target="_blank"><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-orange-500 hover:bg-orange-300">#Live</span></a>

                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mb-2 bg-gray-200 text-decoration: line-through">#Figma</span>
                    </div>
                </div>
        {/* <!--Card 2--> */}
                <div className="rounded overflow-hidden shadow-lg bg-gray-100">
                    <div className="text-5xl flex justify-center gap-16 py-3 px-10 text-gray-600">
                    <img
                        src={safemed}
                        className="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-sm hover:shadow-xl px-10"
                        alt=""
                    />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">safeMed</div>
                        <p className="text-gray-700 text-base">
                        Nothing is more satisfying than working on a project with the potential to help others. SafeMed provides a safe and secure collaboration between interdisciplinary teams within facilities eg. Hospitals, Nursing Homes, and Outpatient
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <a href="https://github.com/rsenecal/Project2-safeMed" rel="noreferrer" target="_blank"><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-orange-500 hover:bg-orange-300">#Github Repo</span></a>

                        <a href="https://project2-safe-med.herokuapp.com/" rel="noreferrer" target="_blank"><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-orange-500 hover:bg-orange-300">#Live</span></a>

                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mb-2 bg-gray-200 text-decoration: line-through ">#Figma</span>
                    </div>
                </div>

        {/* <!--Card 3--> */}
            <div className="rounded overflow-hidden shadow-lg bg-gray-100">
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                <img
                        src={social}
                        className="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-sm hover:shadow-xl px-10"
                        alt=""
                    />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Social Network API</div>
                    <p className="text-gray-700 text-base">
                    Creating an API is like meditation, it is about putting something in place others can depend on.  Implementing the tools necessary to effectively meet the user's criteria.
                    </p>
                </div>
                    <div className="px-6 pt-4 pb-2">
                        <a href="https://github.com/rsenecal/mod18-social-network-api" rel="noreferrer" target="_blank"><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 bg-orange-500 hover:bg-orange-300">#Github Repo</span></a>

                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mb-2 bg-gray-200 text-decoration: line-through">#Live</span>

                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mb-2 bg-gray-200 text-decoration: line-through">#Figma</span>
                    </div>
            </div>
        </div>
            
            {/* Skils Cards  ENDS */}   
        </section>

    </section>
    )
    
}