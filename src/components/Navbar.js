import { useState } from "react";
import { AiFillEnvironment, AiOutlineCaretLeft, AiOutlineUser, AiFillCode, AiFillProject,AiOutlineContacts } from "react-icons/ai";


export default function Navbar() {
    const[open, setOpen] = useState(true)
    const NavItems = [
        { title:'About Me', icon: 'AiOutlineUser' },
        { title: 'Projects', icon: 'AiFillProject' },
        { title: 'Skills', icon:'AiFillCode' },
        { title: 'Contact', icon:'AiOutlineContacts'}
        ];

    return(
        <div className={`bg-blue-300 h-screen p-5 pt-8 text-blue ${open ? 'w-48' : 'w-20'} duration-300 relative`}>

            <AiOutlineCaretLeft className={`bg-blue-500 text-dark-purple  text-3xl rounded-full absolute -right-3 top-9 border border-white cursor-pointer ${!open && 'rotate-180'}`} 
            onClick={() => setOpen(!open) } 
            />
            <div className='inline-flex'>
                <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && 'rotate-[360deg]'}`}
                />

                <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>
                    Portfolio
                </h1>
            </div>
            <div className='flex items-center rounded-md bg-light-white mt-6 px-4 py-2'>
                <ul className='pt-2'>
                    {NavItems.map((nav, index) => (
                        <>
                        <li key={index} className={`text-white text-lg flex-items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2`}>
                            {/* Need to find a way to load acions from array */}
                            <span className='text-2xl block float-left p-1'>
                            <AiOutlineContacts />
                            </span>
                            <span className={`text-base font-medium flex ${!open && 'hidden'}`}> {nav.title} </span>
                        </li>
                        </>
                    ))}

                </ul>
            </div>
            {/* <i>About</i>
            <i>Projects</i>
            <i>Skills</i>
            <i>Contact me</i> */}
        </div>
    )
}