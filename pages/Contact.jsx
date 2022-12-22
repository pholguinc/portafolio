import React from "react";

export default function Contact() {
  return (
    <div
      name="contacto"
      className="w-full h-screen p-4 text-white bg-gradient-to-b from-black to-gray-800"
    >
      <div className="flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto">
        <div id="margincss" className="text-center">
          <p className="inline mt-4 text-4xl font-bold border-b-4 border-gray-500">
            Contacto
          </p>
          <p className="py-6 text-xl">
            Aquí puedes contactarme para cualquier duda u proyecto relacionado.
          </p>
        </div>

        <div className="flex items-center justify-center mt-20">
          <form
            action="https://getform.io/f/cbdcdc3a-29e0-4134-a3a0-d47452fb4322"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Ingresa tus nombres"
              className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Ingresa tu correo"
              className="p-2 my-4 text-white bg-transparent border-2 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Escribe tu mensaje"
              rows="10"
              className="text-white bg-transparent border-2 rounded-md p-62 h-80 focus:outline-none placeholder:p-5"
            ></textarea>

            <button className="flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
