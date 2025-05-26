import PageHeader from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";
import {
  SiAngular,
  SiBun,
  SiClerk,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

type ProjectItem = {
  name: string;
  description: string;
  github: {
    url: string;
    icon: React.ReactNode;
  };
  imgUrl: string;
  liveLink?: {
    url: string;
    icon: React.ReactNode;
  };
  techUsed?: {
    name: string;
    icon: React.ReactNode;
  }[];
};

const projectItems: ProjectItem[] = [
  {
    name: "Angular Task App",
    description:
      "A simple todo list application built using Angular and storing tasks in local storage",
    github: {
      url: "https://github.com/chrismcconn2789/angular-task-list",
      icon: <SiGithub />,
    },
    imgUrl: "https://utfs.io/f/bc0df5b9-92f5-4450-be7f-2d8e7a2d4c2e-tq79f4.png",
    liveLink: {
      url: "https://angular-task-list.chrismcconnell.dev",
      icon: <FaGlobe />,
    },
    techUsed: [
      {
        name: "Angular",
        icon: <SiAngular className="size-3 text-[#E90463]" />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="size-3 text-[#417E37]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="size-3 text-[#38BDF9]" />,
      },
    ],
  },
  {
    name: "React Task App",
    description:
      "A simple todo list application built using React and storing tasks in local storage",
    github: {
      url: "https://github.com/chrismcconn2789/react-task-list",
      icon: <SiGithub />,
    },
    imgUrl: "https://utfs.io/f/ad97d2bc-02e9-4694-9d25-47a75e9cb6a1-8epywd.png",
    liveLink: {
      url: "https://react-task-list.chrismcconnell.dev",
      icon: <FaGlobe />,
    },
    techUsed: [
      {
        name: "React",
        icon: <SiReact className="size-3 text-[#5FD3F3]" />,
      },
      {
        name: "Bun",
        icon: <SiBun className="size-3 text-[#FBF0DF]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="size-3 text-[#38BDF9]" />,
      },
    ],
  },
  {
    name: "Weather App",
    description:
      "A simple weather application built using Next.js and fetching the weather data using the OpenWeather API",
    github: {
      url: "https://github.com/chrismcconn2789/nextjs-weather",
      icon: <SiGithub />,
    },
    imgUrl: "https://utfs.io/f/c429eb3c-b19c-43da-b0c3-e1cbae1726df-ke668q.png",
    liveLink: {
      url: "https://nextjs-weather-five.vercel.app/",
      icon: <FaGlobe />,
    },
    techUsed: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="size-3 text-[#FFFFFF]" />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="size-3 text-[#417E37]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="size-3 text-[#38BDF9]" />,
      },
    ],
  },
  {
    name: "Expense Tracker App",
    description:
      "An expense tracker application title 'Financial Analytics' to track expense and income with some visualisations",
    github: {
      url: "https://github.com/chrismcconn2789/expense-tracker",
      icon: <SiGithub />,
    },
    imgUrl: "https://utfs.io/f/0c5c7155-24a8-4309-935d-37dd6eab82e3-fmrejc.png",
    techUsed: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="size-3 " />,
      },
      {
        name: "Bun",
        icon: <SiBun className="size-3" />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="size-3 " />,
      },
      {
        name: "Clerk",
        icon: <SiClerk className="size-3 " />,
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <PageHeader title="Projects">
      <div className="flex flex-col gap-4 w-full mt-4 px-1 sm:px-4 mb-8">
        {projectItems.map((project) => {
          return <ProjectItemComponent key={project.name} project={project} />;
        })}
      </div>
    </PageHeader>
  );
}

function ProjectItemComponent({ project }: { project: ProjectItem }) {
  return (
    <div
      key={project.name}
      className="flex gap-4 px-4 pt-4 pb-1 border-zinc-900 border"
    >
      <div className="flex flex-col gap-4 justify-between w-full">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <h2 className="text-xl text-zinc-200 font-semibold">
              {project.name}
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-xl">
            {project.description}.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col gap-4 justify-between items-start sm:items-center">
          <div className="flex flex-wrap gap-2">
            {project.techUsed?.map((tech) => {
              return (
                <Badge
                  key={tech.name}
                  className="text-xs flex gap-2 h-fit font-normal bg-transparent border-zinc-900 border rounded-full text-zinc-400 min-w-fit hover:bg-zinc-900"
                >
                  {tech.icon} {tech.name}
                </Badge>
              );
            })}
          </div>
          <div className="flex flex-wrap sm:gap-4">
            {project.liveLink && (
              <Button
                size="sm"
                variant="link"
                className="text-zinc-400 bg-transparent"
              >
                <div className="flex gap-2 items-center">
                  {project.liveLink.icon}
                  <Link className="text-xs" href={project.liveLink.url}>
                    Live Link
                  </Link>
                </div>
              </Button>
            )}
            <Button
              size="sm"
              variant="link"
              className="text-zinc-400 bg-transparent"
            >
              <div className="flex gap-2 items-center">
                {project.github.icon}
                <Link className="text-xs" href={project.github.url}>
                  GitHub Link
                </Link>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
