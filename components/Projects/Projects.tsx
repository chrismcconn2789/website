import Image from "next/image";
import {
  SiAngular,
  SiBun,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { Badge } from "../ui/badge";

const Projects = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-medium tracking-tight">Projects</h2>
      <p className="text-base text-slate-500 mb-4">
        Some side projects I&apos;ve built or I&apos;m currently working on:
      </p>
      <div className="grid grid-cols-2 gap-6 mt-2">
        <div className="flex w-full h-[300px] bg-slate-100 rounded-lg shadow-md items-end justify-center">
          <div className="p-2 flex flex-col mb-2">
            <Image
              src="https://raw.githubusercontent.com/chrismcconn2789/website/main/public/angular-task.png"
              alt="angular-task-app-screenshot"
              width={380}
              height={255}
            />
            <div className="flex justify-center gap-1">
              <Badge className="bg-slate-900 border p-1 px-2 rounded-md">
                <SiAngular className="size-4 mr-1 text-[#D70230]" />
                <span className="text-white">Angular</span>
              </Badge>
              <Badge className="bg-slate-900 border p-1 px-2 rounded-md">
                <SiNodedotjs className="size-4 mr-1 text-[#74AB63]" />
                <span className="text-white">Node.js</span>
              </Badge>
              <Badge className="bg-slate-900 border p-1 px-2 rounded-md">
                <SiTailwindcss className="size-4 mr-1 text-[#38BDF9]" />
                <span className="text-white">Tailwind CSS</span>
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex w-full h-[300px] bg-slate-100 rounded-lg shadow-md items-end justify-center">
          <div className="p-2 flex flex-col mb-2">
            <Image
              src="https://raw.githubusercontent.com/chrismcconn2789/website/main/public/react-task.png"
              alt="react-task-app-screenshot"
              width={380}
              height={255}
            />
            <div className="flex justify-center gap-1">
              <Badge className="bg-slate-900 border p-1 px-2 rounded-md">
                <SiReact className="size-4 mr-1 text-[#5FD3F3]" />
                <span className="text-white">React</span>
              </Badge>
              <Badge className="bg-slate-900 border p-1 px-2 rounded-md">
                <SiBun className="size-4 mr-1 text-[#FBF0DF]" />
                <span className="text-white">Bun</span>
              </Badge>
              <Badge className="bg-slate-900 border p-1 px-2 rounded-md">
                <SiTailwindcss className="size-4 mr-1 text-[#38BDF9]" />
                <span className="text-white">Tailwind CSS</span>
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex w-full h-[300px] bg-slate-100 rounded-lg shadow-md items-end justify-center">
          <div className="p-2 flex flex-col mb-2">
            <Image
              src="https://raw.githubusercontent.com/chrismcconn2789/website/main/public/next-weather.png"
              alt="weather-app-screenshot"
              width={380}
              height={255}
            />
            <div className="flex justify-center gap-1">
              <Badge className="bg-slate-900 border p-1 px-2 rounded-md">
                <SiNextdotjs className="size-4 mr-1 text-[#FFFFFF]" />
                <span className="text-white">Next.js</span>
              </Badge>
              <Badge className="bg-slate-900 border p-1 px-2 rounded-md">
                <SiNodedotjs className="size-4 mr-1 text-[#74AB63]" />
                <span className="text-white">Node.js</span>
              </Badge>
              <Badge className="bg-slate-900 border p-1 px-2 rounded-md">
                <SiTailwindcss className="size-4 mr-1 text-[#38BDF9]" />
                <span className="text-white">Tailwind CSS</span>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
