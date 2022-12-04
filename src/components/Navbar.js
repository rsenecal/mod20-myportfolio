import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";


export default function Navbar() {
    const[open, setOpen] = useState(true)
    return(
        <div className={`bg-blue-300 h-screen p5 pt-8 text-blue ${open ? 'w-72' : 'w-20'} relative`}>
            <AiOutlineArrowLeft className='bg-green text-dark-purple  text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer' onClick={() => setOpen(!open) } />
            <i>About</i>
            <i>Projects</i>
            <i>Skills</i>
            <i>Contact me</i>
        </div>
    )
}