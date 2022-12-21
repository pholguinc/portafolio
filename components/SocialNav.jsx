import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function SocialNav() {
    const links =[
        {
            id: 1,
            child: (
                <>
                Linkedin <FaLinkedin size={30} />
                </>    
            ),
            href: 'https://www.linkedin.com/in/pedroholguinc/',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>    
            ),
            href: 'https://github.com/pholguinc',
        },
        {
            id: 3,
            child: (
                <>
                Correo <HiOutlineMail size={30} />
                </>    
            ),
            href: 'mailto:holguinpedro90@gmail.com',
        },
        {
            id: 3,
            child: (
                <>
                CV <BsFillPersonLinesFill size={30} />
                </>    
            ),
            href: '/cv.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id,child,href,style, download})=>
              <li key={id} className={'flex items-center justify-between w-40 px-4 h-14 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'+" " +style}>
                    <a href={href} className='flex items-center justify-between w-full text-white' download={download} target="_blank">
                        {child}
                    </a>
               </li>
            )}
            
        </ul>
    </div>
  )
}
