import { FaUserAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-medium tracking-tight mb-4">About</h2>
      <div className="flex w-full">
        <div className="w-2/3 flex flex-col gap-4">
          <h3 className="text-3xl text-slate-900 font-bold text-balance">
            Hello! I&apos;m Chris, a developer based in Belfast
          </h3>
          <p className="font-regular text-balance">
            I&apos;m a Front-End Developer currently working for OpenText.{" "}
          </p>
          <p>
            I have serious passion for UI effects, animations and creating
            intuitive, dynamic user experiences.
          </p>
          <p>
            {" "}
            I am very proficient in HTML, CSS and Javascript and I have recently
            been experimenting in the popular Javascript frameworks and
            libraries such as Next.js, React, Svelte, and Angular
          </p>
        </div>
        <div className="w-1/3 flex justify-center">
          <div className="h-[300px] w-[200px] bg-slate-100 shadow-md rounded-md flex flex-col items-center justify-center text-center gap-2 border-2 border-slate-300 border-dashed">
            <FaUserAlt className="text-slate-600 size-10" />
            <p className="text-xs text-slate-500 w-1/3">
              Profile picture placeholder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
