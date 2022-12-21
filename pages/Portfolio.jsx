import React from 'react'
import Image from "next/image";

export default function Portfolio() {

  const portfolios = [
    {
      id: 1,
      src: '/dev.jpeg'
      
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
       
        portfolios.map(({id, src}) => (

        
          <div key={id} className='duration-300 rounded-lg shadow-md shadow-gray-600 hover:scale-105 '>
             <img src={src} alt="" className='rounded-md' />
             <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 hover:scale-105'>Código</button>
             </div>
          </div>
        
          
        ))}

</div>
      </div>
    </div>
  )
}
