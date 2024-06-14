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
      <h2 className="text-xl font-medium tracking-tighter">Projects</h2>
      <p className="text-base text-slate-400">
        Some side projects I&apos;m currently working on:
      </p>
      <div className="grid grid-cols-3 gap-4 mt-2">
        <div className="flex w-full h-[300px] bg-transparent rounded-lg border border-teal-400/30 border-solid items-end justify-center">
          <div className="p-2 flex gap-1">
            <Badge className="bg-neutral-900 border border-teal-500/30 p-1 px-2">
              <SiAngular className="size-4 mr-1 text-[#D70230]" />
              <span className="text-white">angular</span>
            </Badge>
            <Badge className="bg-neutral-900 border border-teal-500/30">
              <SiNodedotjs className="size-4 mr-1 text-[#74AB63]" />
              <span className="text-white">nodejs</span>
            </Badge>
            <Badge className="bg-neutral-900 border border-teal-500/30">
              <SiTailwindcss className="size-4 mr-1 text-[#38BDF9]" />
              <span className="text-white">tailwind</span>
            </Badge>
          </div>
        </div>
        <div className="flex w-full h-[300px] bg-transparent rounded-lg border border-teal-400/30 border-solid items-end justify-center">
          <div className="p-2 flex gap-1">
            <Badge className="bg-neutral-900 border border-teal-500/30 p-1 px-2">
              <SiReact className="size-4 mr-1 text-[#5FD3F3]" />
              <span className="text-white">reactjs</span>
            </Badge>
            <Badge className="bg-neutral-900 border border-teal-500/30">
              <SiBun className="size-4 mr-1 text-[#FBF0DF]" />
              <span className="text-white">bun</span>
            </Badge>
            <Badge className="bg-neutral-900 border border-teal-500/30">
              <SiTailwindcss className="size-4 mr-1 text-[#38BDF9]" />
              <span className="text-white">tailwind</span>
            </Badge>
          </div>
        </div>
        <div className="flex w-full h-[300px] bg-transparent rounded-lg border border-teal-400/30 border-solid items-end justify-center">
          <div className="p-2 flex gap-1">
            <Badge className="bg-neutral-900 border border-teal-500/30 p-1 px-2">
              <SiNextdotjs className="size-4 mr-1 text-[#FFFFFF]" />
              <span className="text-white">nextjs</span>
            </Badge>
            <Badge className="bg-neutral-900 border border-teal-500/30">
              <SiNodedotjs className="size-4 mr-1 text-[#74AB63]" />
              <span className="text-white">nodejs</span>
            </Badge>
            <Badge className="bg-neutral-900 border border-teal-500/30">
              <SiTailwindcss className="size-4 mr-1 text-[#38BDF9]" />
              <span className="text-white">tailwind</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
