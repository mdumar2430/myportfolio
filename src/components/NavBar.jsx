import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
const NavBar = () => {

    const [showNav, setShowNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Portfolio'
        },
        {
            id: 4,
            link: 'Experience'
        },
        {
            id: 5,
            link: 'Contact'
        }
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
            <h1 className= 'text-5xl font-sign'>
                Md Umar
            </h1>
        </div>
        <ul className='hidden md:flex'>
            {links.map(({id, link}) => (
                <li key={id} className='text-gray-500 font-medium px-4 hover:scale-105 cursor-pointer duration-200 hover:text-cyan-50'>
                    {link}
                </li>
            ))}
        </ul>

        <div onClick={() => setShowNav(!showNav)} 
        className='md:hidden cursor-pointer text-gray-500 hover:text-white z-10'>
            {showNav ? <FaTimes size={30} /> : <FaBars size={25}/>}
        </div>
        
        {showNav && 
            <ul className='flex flex-col w-full absolute justify-center items-center h-screen top-0 left-0 bg-gradient-to-b from-black to-slate-600'>
            {links.map(({id, link}) => (
                <li key={id} className='text-2xl px-4 py-6 text-yellow-50 cursor-pointer hover:scale-105 duration-200 hover:text-yellow-200'>
                    {link}
                </li>
            ))}
        </ul>        
        }
        

    </div>
  )
}

export default NavBar