import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { RxChevronRight } from "react-icons/rx";
import { Button } from "../ui/button";

const About = () => {
  return (
    <div id="about" className="w-full px-1 md:px-6">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6 underline-offset-8 decoration-teal-400 underline">
        About
      </h2>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <div className="text-xl md:text-3xl text-slate-900 font-bold text-balance">
            Hello! I&apos;m Chris, a developer based in
            <span className="inline-flex bg-teal-500 text-white px-2 py-1 rounded-md gap-1 pr-3 ml-1">
              <FiMapPin className="size-4 md:size-6 text-white stroke-white stroke-2 self-center" />
              Belfast
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-regular  text-slate-600 flex gap-1 text-sm md:text-base">
              <span>
                <RxChevronRight className="size-3 md:size-4 text-teal-400 stroke-teal-400 stroke-1 justify-self-start mt-1" />
              </span>
              I am a front-end developer at OpenText, specializing in creating
              engaging, interactive, and accessible user interfaces primarily
              using Angular.
            </p>
            <p className="font-regular text-slate-600 flex gap-1 text-sm md:text-base">
              <span>
                <RxChevronRight className="size-3 md:size-4 text-teal-400 stroke-teal-400 stroke-1 justify-self-start mt-1" />
              </span>
              I have extensive experience with HTML, CSS, JavaScript and
              Typescript, focusing on building responsive and user-friendly
              applications.
            </p>
            <p className="font-regular  text-slate-600 flex gap-1 text-sm md:text-base">
              <span>
                <RxChevronRight className="size-3 md:size-4 text-teal-400 stroke-teal-400 stroke-1 justify-self-start mt-1" />
              </span>
              I am actively experimenting with popular frameworks and libraries
              such as React and Next.js to enhance my skill set and build
              innovative side projects.
            </p>
            <p className="font-regular  text-slate-600 flex gap-1 text-sm md:text-base">
              <span>
                <RxChevronRight className="size-3 md:size-4 text-teal-400 stroke-teal-400 stroke-1 justify-self-start mt-1" />
              </span>
              When I'm not at the computer, I&apos;m normally spending time with
              my wife and son or out cycling on the Ards peninsula.
            </p>
          </div>
          <div className="flex gap-4 ml-4 mt-2 mb-8 md:mb-0 justify-center md:justify-start">
            <Button asChild size="sm" className="flex gap-2">
              <a href="https://github.com/chrismcconn2789" target="_blank">
                <FaGithub className="size-5" />
                <span className="text-xs">View Github</span>
              </a>
            </Button>
            <Button asChild size="sm" variant="outline" className="flex gap-2">
              <a href="https://linkedin.com/in/cmcconnell89">
                <FaLinkedin className="size-5 text-sky-500" />
                <span className="text-xs">View LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <Image
            src="https://utfs.io/f/84ba3c7b-2a67-4589-ba8b-a374ee22d796-1ka6na.jpg"
            width={1000}
            height={1000}
            alt="profile-pic"
            className="object-fit rounded-md shadow-xl w-0 md:w-5/6 h-auto"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
