import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'

export default function Home() {

  
  return (
    <div
      name="Inicio"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800"
    >
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-white sm:text-7xl">
            I'm a Full Stack Developer
          </h2>
          <p className="max-w-md py-4 text-gray-500">
            Soy Pedro Holguín, profesional en el ámbito del desarrollo de
            sistemas informáticos brindando una óptima solución para negocios
            y/o empresas. Actualmente trabajo con: "Laravel, VueJS, NextJS,
            Angular, Django, NestJS, Typescript "
          </p>
          <div>
            <Link
              to="proyectos"
              smooth
              duration={500}
              className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group bg-gradient-to-r from-cyan-500 to-blue-500 w-fit"
            >
              Portafolio
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="pt-10">
          <img
            src="/hero.jpg"
            alt=""
            className="w-2/3 mx-auto rounded-2xl md:w-full"
          />
        </div>
      </div>
    </div>
  );
}
