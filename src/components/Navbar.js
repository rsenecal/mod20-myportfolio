// import { useState } from "react";

// import Img from 'react-optimized-image'

import { AiOutlineUser } from "react-icons/ai";

// import roody from "../public/roody.png"


export default function Navbar() {
    // const[open, setOpen] = useState(true)
    // const NavItems = [
    //     { title:'About Me', icon: 'AiOutlineUser' },
    //     { title: 'Projects', icon: 'AiFillProject' },
    //     { title: 'Skills', icon:'AiFillCode' },
    //     { title: 'Contact', icon:'AiOutlineContacts'}
    //     ];

    return(
   
    <>
            <section>
                <nav clasName='py-10 mb-12 flex justify-between'>
                    <h1 className='text-xl'>Roody</h1>
                    <ul className='flex items-center'>
                        <li>
                            <AiOutlineUser className="cursor-pointer text-2xl"/>
                        </li>
                        <li>
                            <a className="bg-gradient-to-r  from-yellow-300 to-red-300 text-white px-4 py-2 rounded-md ml-8" href="#home">
                                Portfolio
                                </a>
                        </li>
                       
                    </ul>
                </nav>
            </section>
    
    </>
    )
}