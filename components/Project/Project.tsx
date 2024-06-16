import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";

type ProjectProps = {
  name: string;
  description: string;
  imgUrl: string;
  link: LiveDemo;
  github: GithubCode;
  technologies: Technology[];
};

type Technology = {
  name: string;
  icon: React.ReactNode;
};

type LiveDemo = {
  url: string;
  icon: React.ReactNode;
};

type GithubCode = {
  url: string;
  icon: React.ReactNode;
};

const Project = ({
  name,
  description,
  imgUrl,
  link,
  github,
  technologies,
}: ProjectProps) => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-bold">{name}</h4>
        <div className="flex gap-2">
          <a href={link.url}>
            <Badge className="flex gap-1 font-light rounded-md">
              {link.icon} Live Demo
            </Badge>
          </a>
          <a href={github.url}>
            <Badge className="flex gap-1 font-light rounded-md">
              {github.icon} Github
            </Badge>
          </a>
        </div>
      </div>
      <p className="text-sm">{description}</p>

      <div className="flex flex-1 self-center">
        <Image
          src={imgUrl}
          width={350}
          height={0}
          alt={`${name} Screenshot`}
          className="w-full h-auto"
        />
      </div>
      <div className="flex gap-2 self-center">
        {technologies.map((tech, index) => {
          return (
            <Badge
              key={`${tech.name + index}`}
              className="flex gap-1 font-light py-1 rounded-md"
            >
              {tech.icon}
              {tech.name}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
