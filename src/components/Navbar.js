import { useState } from "react";
import { AiFillEnvironment, AiOutlineCaretLeft } from "react-icons/ai";


export default function Navbar() {
    const[open, setOpen] = useState(true)
    const NavItems = [
        { title:'About Me' },
        { title: 'Projects' },
        { title: 'Skills' },
        { title: 'Contact'}
        ];
        
    return(
        <div className={`bg-blue-300 h-screen p5 pt-8 text-blue ${open ? 'w-72' : 'w-20'} duration-300 relative`}>

            <AiOutlineCaretLeft className={`bg-blue-500 text-dark-purple  text-3xl rounded-full absolute -right-3 top-9 border border-white cursor-pointer ${!open && 'rotate-180'}`} 
            onClick={() => setOpen(!open) } 
            />
            <div className='inline-flex'>
                <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && 'rotate-[360deg]'}`}
                />

                <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>
                    Portfolio
                </h1>
                <ul className='pt-2'>

                </ul>
            </div>
            {/* <i>About</i>
            <i>Projects</i>
            <i>Skills</i>
            <i>Contact me</i> */}
        </div>
    )
}