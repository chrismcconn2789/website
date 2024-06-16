import { FaGlobe } from "react-icons/fa";
import {
  SiAngular,
  SiBun,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { v4 as uuidv4 } from "uuid";
import Project from "../Project/Project";

const Projects = () => {
  return (
    <div id="projects" className="w-full px-6">
      <h2 className="text-xl font-medium tracking-tight underline-offset-8 decoration-teal-400 underline mb-4">
        Projects
      </h2>
      <p className="text-base text-slate-600 mb-4">
        Some side projects I&apos;ve built or I&apos;m currently working on:
      </p>
      <div className="grid grid-cols-2 gap-6 mt-2">
        <div className="flex w-full h-auto bg-slate-100 rounded-lg shadow-md justify-center">
          <Project
            name="Angular Task App"
            description="A simple todo list application built using Angular and storing tasks in local storage"
            github={{
              url: "https://github.com/chrismcconn2789/angular-task-list",
              icon: <SiGithub />,
            }}
            imgUrl="https://raw.githubusercontent.com/chrismcconn2789/website/main/public/angular-task.png"
            link={{
              url: "https://angular-task-list.chrismcconnell.dev",
              icon: <FaGlobe />,
            }}
            technologies={[
              {
                name: "Angular",
                icon: <SiAngular className="size-4 text-[#E90463]" />,
              },
              {
                name: "Node.js",
                icon: <SiNodedotjs className="size-4 text-[#417E37]" />,
              },
              {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="size-4 text-[#38BDF9]" />,
              },
            ]}
            key={uuidv4()}
          />
        </div>
        <div className="flex w-full h-auto bg-slate-100 rounded-lg shadow-md justify-center">
          <Project
            name="React Task App"
            description="A simple todo list application built using React and storing tasks in local storage"
            github={{
              url: "https://github.com/chrismcconn2789/react-task-list",
              icon: <SiGithub />,
            }}
            imgUrl="https://raw.githubusercontent.com/chrismcconn2789/website/main/public/react-task.png"
            link={{
              url: "https://react-task-list.chrismcconnell.dev",
              icon: <FaGlobe />,
            }}
            technologies={[
              {
                name: "React",
                icon: <SiReact className="size-4 text-[#5FD3F3]" />,
              },
              {
                name: "Bun",
                icon: <SiBun className="size-4 text-[#FBF0DF]" />,
              },
              {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="size-4 text-[#38BDF9]" />,
              },
            ]}
            key={uuidv4()}
          />
        </div>
        <div className="flex w-full h-auto bg-slate-100 rounded-lg shadow-md justify-center">
          <Project
            name="Weather App"
            description="A simple weather application built using Next.js and fetching the weather data using the OpenWeather API"
            github={{
              url: "https://github.com/chrismcconn2789/nextjs-weather",
              icon: <SiGithub />,
            }}
            imgUrl="https://raw.githubusercontent.com/chrismcconn2789/website/main/public/next-weather.png"
            link={{
              url: "https://nextjs-weather-five.vercel.app/",
              icon: <FaGlobe />,
            }}
            technologies={[
              {
                name: "Next.js",
                icon: <SiNextdotjs className="size-4 text-[#FFFFFF]" />,
              },
              {
                name: "Node.js",
                icon: <SiBun className="size-4 text-[#417E37]" />,
              },
              {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="size-4 text-[#38BDF9]" />,
              },
            ]}
            key={uuidv4()}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
