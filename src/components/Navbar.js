
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
export default function Navbar() {

    return(
  
    <section>
        <nav className='py-10 mb-12 flex justify-between'>
        
            <ul className='flex items-center gap-10 px-10'>
    
                <li className='text-sm text-orange-600'><Link to='/skills'> Skills</Link></li>
                <li className='text-sm text-orange-600'><Link to='/projects'> Projects</Link></li>
                <li className='text-sm text-orange-600'><Link to='/contact'> Contact</Link></li>
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