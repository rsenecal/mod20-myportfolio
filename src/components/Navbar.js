
import { AiOutlineUser } from "react-icons/ai";
// import { Link } from 'react-router-dom';
export default function Navbar({myRef}) {

    return(
  
    <section>
        <nav className='py-10 mb-12 flex justify-between'>
        
            <ul className='flex items-center gap-10 px-10'>

                <li className='text-sm text-orange-600' onClick={e=> myRef.current.About.scrollIntoView()}> About</li>
                <li className='text-sm text-orange-600'onClick={e=> myRef.current.Skills.scrollIntoView()}> Skills</li>
                <li className='text-sm text-orange-600' onClick={e=> myRef.current.Projects.scrollIntoView()}>Projects</li>
                <li className='text-sm text-orange-600' onClick={e=> myRef.current.Contact.scrollIntoView()}> Conatcts</li>
                <li>
                    <AiOutlineUser className="cursor-pointer text-2xl"/>
                    
                </li>
                {/* <li>
                    <a className="bg-gradient-to-r  from-yellow-300 to-red-300 text-white px-4 py-2 rounded-md ml-8" href="#home">
                        Portfolio
                        </a>
                </li> */}

                
            </ul>
 
        </nav>

    </section>
    
    )
}