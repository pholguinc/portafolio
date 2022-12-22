import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Great_Vibes } from '@next/font/google'
import { Link } from "react-scroll";

const great = Great_Vibes({
  weight: '400',
  subsets: ['latin']
})



const links = [
  {
    id: 1,
    link: 'Inicio'
  },
  {
    id: 2,
    link: 'Sobre mi'
  },
  {
    id: 3,
    link: 'proyectos'
  },
  {
    id: 4,
    link: 'habilidades'
  },
  
  {
    id: 5,
    link: 'contacto'
  },
];


export default function Navbar() {

  const [nav, setNav] = useState(false)
  
  return (

    <div className="fixed z-50 flex items-center justify-between w-full h-20 px-4 text-white bg-gray-900">
      <div>
        <h1 className={`text-5xl ml-2 ${great.className}`}>Portafolio</h1> 
      </div>
      <ul className='hidden md:flex'>
        {links.map(({id, link}) => (
          <li key={id} className='px-4 font-medium capitalize duration-200 cursor-pointer texxt-gray-500 hover:scale-105'>
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
            
      </ul>
      <div onClick={() => setNav(!nav)} className="z-10 pr-4 text-gray-500 cursor-pointer md:hidden">
          { nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-gray-500 bg-gradient-to-t from-black to-gray-800'>
          {links.map(({id, link}) => (
            <li key={id} className='px-4 py-6 text-4xl capitalize cursor-pointer'>
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
              {link}
            </Link>
            </li>
          ))}
            
          </ul>
        )}
    </div>
  )
}
