
export default function About() {
    return(
        <div className='' id="about">
         <div className="p-10"><h1 className="text-2xl"> About Me</h1>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-20 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://xsgames.co/randomusers/avatar.php?g=male" alt="" width="384" height="512"></img>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <p class="text-lg font-medium">
                    “Tailwind CSS is the only framework that I've seen scale
                    on large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                </p>
                </div>
            </figure>
         



        </div>
        </div>
    )
}
