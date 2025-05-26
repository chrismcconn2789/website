import PageHeader from "@/components/page-header";
import React from "react";
import {
  SiAngular,
  SiApollographql,
  SiCss3,
  SiD3Dotjs,
  SiDocker,
  SiGit,
  SiGo,
  SiGooglecloud,
  SiGraphql,
  SiHtml5,
  SiLeaflet,
  SiMicrosoftazure,
  SiNextdotjs,
  SiNgrx,
  SiPostgresql,
  SiPulumi,
  SiReact,
  SiReactivex,
  SiTailwindcss,
} from "react-icons/si";

export default function Home() {
  const techStack = [
    { icon: SiNextdotjs, title: "Next.js" },
    { icon: SiReact, title: "React" },
    { icon: SiTailwindcss, title: "Tailwind CSS" },
    { icon: SiGraphql, title: "GraphQL" },
    { icon: SiApollographql, title: "Apollo" },
    { icon: SiDocker, title: "Docker" },
    { icon: SiPostgresql, title: "PostgreSQL" },
    { icon: SiGo, title: "Go" },
    { icon: SiMicrosoftazure, title: "Microsoft Azure" },
    { icon: SiGooglecloud, title: "Google Cloud" },
    { icon: SiPulumi, title: "Pulumi" },
    { icon: SiAngular, title: "Angular" },
    { icon: SiNgrx, title: "NgRx" },
    { icon: SiReactivex, title: "RxJS" },
    { icon: SiD3Dotjs, title: "D3.js" },
    { icon: SiLeaflet, title: "Leaflet" },
    { icon: SiHtml5, title: "HTML" },
    { icon: SiCss3, title: "CSS" },
    { icon: SiGit, title: "Git" },
  ];

  const aboutParagraphs = [
    "Hi, I’m Chris 👋🏻 — a front-end web developer based in Belfast.",
    "I am a frontend developer with a strong focus on building scalable, performant, and accessible user interfaces. Since September 2024, I have been working at my current company, where I develop modern web applications using React and Next.js, with GraphQL API integration through Apollo Client. In addition to my front-end responsibilities, I have contributed to backend services built in Go, further expanding my technical skill set.",
    "Prior to this role, I specialized in Angular development, gaining extensive experience with NgRx for state management, RxJS for reactive programming, and libraries such as D3 and Leaflet JS to create interactive data visualizations and mapping solutions.",
    "With a solid foundation in HTML, CSS, JavaScript, and TypeScript, I am committed to building responsive, intuitive applications that deliver a high-quality user experience. Outside of development, I enjoy spending time with my family and cycling across the Ards Peninsula.",
  ];

  return (
    <PageHeader title="About">
      <div className="flex flex-col gap-4 text-center px-1 sm:px-8 mt-4 mb-8">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph} className="text-zinc-400 text-balance">
            {paragraph}
          </p>
        ))}
        <div className="flex flex-wrap max-w-xl mx-auto justify-center mt-16 gap-3">
          {techStack.map((tech) => (
            <TechIcon
              key={tech.title}
              icon={tech.icon({ size: 32 })}
              title={tech.title}
              className="text-zinc-300"
            />
          ))}
        </div>
      </div>
    </PageHeader>
  );
}

function TechIcon({
  icon,
  title,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  className: string;
}) {
  return (
    <span className={className} title={title} aria-label={title}>
      {icon}
    </span>
  );
}
