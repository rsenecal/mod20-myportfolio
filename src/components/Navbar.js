import { useState } from "react";

// import Img from 'react-optimized-image'

import { 
    AiOutlineUser, 
    AiFillLinkedin,
    AiFillGithub, } from "react-icons/ai";

// import roody from "../public/roody.png"


export default function Navbar() {
    // const[open, setOpen] = useState(true)
    const NavItems = [
        { title:'About Me', icon: 'AiOutlineUser' },
        { title: 'Projects', icon: 'AiFillProject' },
        { title: 'Skills', icon:'AiFillCode' },
        { title: 'Contact', icon:'AiOutlineContacts'}
        ];

    return(
   
    // <div>
    //     <head>
    //         <title>Roodolph Senecal</title>
    //         <meta name="description" content="Roodolph Portfolio Page"></meta>
    //     </head>
    //     <main className="bg-white px-10">
    <>
            <section className="min-h-screen">
                <nav clasName='py-10 mb-12 flex justify-between'>
                    <h1 className='text-xl'>Roody</h1>
                    <ul className='flex items-center'>
                        <li>
                            <AiOutlineUser className="cursor-pointer text-2xl"/>
                        </li>
                        <li>
                            <a className="bg-gradient-to-r  from-blue-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#home">
                                About
                                </a>
                        </li>
                       
                    </ul>
                </nav>
                <div className="text-center p-10">
                    <h2 className="text-5xl py-2 text-teal-500">Roodolph Senecal</h2>
                    <h3 className="text-2xl" py-2> Developer, Yoga Teacher</h3>
                    <p classNmae="text-md py-5 leading-8 text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus massa enim, et ullamcorper mi rutrum ac. Suspendisse at dui urna. Cras lorem tortor, tincidunt vitae lacinia sed, feugiat in nunc. Praesent nisi enim, consequat eget vulputate sed, vestibulum ut mi. Vestibulum lobortis velit nec odio imperdiet consectetur. Quisque eleifend lectus vel nisl efficitur consectetur. Proin sed libero consequat, pulvinar nisi vel, congue orci. Sed nec est tristique, tristique lacus in, bibendum arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam aliquam egestas diam, id tincidunt nulla lobortis tempus.
                    </p>
                </div>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                <AiFillGithub />
                <AiFillLinkedin />
                </div>
                <div className="relative mx-auto bg-gradient-to-b justify-center from-blue-500 to-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
                <img alt="" src="https://loremflickr.com/320/240" />
                </div>
            </section>
    
    </>
    )
}