import React from "react";
export default function Skills() {
  const skills = [
    {
      id: 1,
      src: "./html.png",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "./css.png",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "./javascript.png",
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: "./react.png",
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: "./tailwind.png",
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: "./github.png",
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: "./java.png",
      title: "Java",
      style: "shadow-orange-400",
    },
    {
      id: 8,
      src: "./laravel.svg",
      title: "Laravel",
      style: "shadow-red-500",
    },
    {
      id: 9,
      src: "./vue.png",
      title: "Vue JS",
      style: "shadow-emerald-500",
    },
    {
      id: 10,
      src: "./bootstrap.svg",
      title: "Bootstrap",
      style: "shadow-violet-500",
    },
    {
      id: 11,
      src: "./mysql.png",
      title: "MySQL",
      style: "shadow-sky-500",
    },
    {
      id: 12,
      src: "./sql.png",
      title: "SQL Server",
      style: "shadow-red-500",
    },
  ];

  return (
    <div
      name="habilidades"
      className="w-full bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white">
        <div>
          <p className="inline p-2 text-4xl font-bold border-b-4 border-gray-500">
            Habilidades
          </p>
          <p className="py-6 mt-4 text-xl">En esta sección menciono las tecnologías con las que trabajo.</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
