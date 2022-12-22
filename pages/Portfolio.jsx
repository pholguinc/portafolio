import React from 'react'
import Image from "next/image";


export default function Portfolio() {

  const portfolios = [
    {
      id: 1,
      src: '/portafolio.png',
      title: 'Portafolio',
      desc :'NextJS',
      href: 'https://github.com/pholguinc/portafolio'
      
    },
    {
      id: 2,
      src: '/optica.jpeg',
      title: 'Sistema Óptica',
      desc :'Laravel 9 + Livewire',
      href: 'https://github.com/pholguinc/optica'
      
    }
  ]
  return (
    <div name="proyectos" className='w-full text-white bg-gradient-to-b from-black to-gray-800 md:h-screen'>
      <div className='flex flex-col justify-start w-full h-full max-w-screen-lg p-4 mx-auto'>
        <div className='pb-8'>
          <p className='inline text-4xl font-bold border-gray-500'>Portfolio</p>
          <p className='py-6'>Revisa mis trabajos aquí</p>
        </div>

        <div  className='grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0'>
        {
       
        portfolios.map(({id, src, title, desc, href}) => (

        
          <div key={id} className='rounded-lg shadow-md shadow-gray-600'>
             <img src={src} alt="" className='rounded-md' />
             <h2 className='my-4 font-bold text-center'>{title}</h2>
                <p className='my-4 text-center'>{desc}</p>
             <div className='flex items-center justify-center mb-4'>
             <a target="_blank" href={href} className='w-1/2 px-6 py-1 m-0 text-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105'>
              Código
             </a>
             </div>
          </div>
        
          
        ))}

</div>
      </div>
    </div>
  )
}
