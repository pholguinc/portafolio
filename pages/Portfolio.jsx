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
      
    },
    {
      id: 3,
      src: '/react-laravel.png',
      title: 'CRUD de Posts',
      desc :'Laravel 9 + React JS + Breeze',
      href: 'https://github.com/pholguinc/react-laravel'
      
    },
    {
      id: 3,
      src: '/usuarios.png',
      title: 'CRUD de Usuarios',
      desc :'Laravel 9 + VueJS + InertiaJS',
      href: 'https://github.com/pholguinc/crud-usuarios'
      
    },
  ]
  return (
    <div
      name="proyectos"
      className="w-full text-white md:h-screen bg-gradient-to-b from-black to-gray-800"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-8 mx-auto">
        <div className="mt-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Proyectos
          </p>
          <p className="py-6">Aquí puedes revisar los proyectos en los que trabajé.</p>
        </div>

        <div className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
          {portfolios.map(({ id, src, title, desc, href }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="duration-200 rounded-md hover:scale-105"
              />
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
