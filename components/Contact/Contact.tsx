import Link from "next/link";
import { FiDownload, FiMail } from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <div id="contact" className="w-full px-1 md:px-6">
      <h2 className="text-xl md:text-2xl font-bold tracking-tighter text-slate-800 underline-offset-8 decoration-teal-400 underline mb-6">
        Contact
      </h2>
      <p className="text-slate-600 mb-4">Get in touch:</p>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <span className="text-base font-semibold">Email & CV</span>{" "}
          <a className="font-medium" href="mailto:hello@chrismcconnell.dev">
            <div className="flex gap-2 p-4 bg-slate-100 rounded-md items-center">
              <FiMail className="size-6" />
              hello@chrismcconnell.dev
            </div>
          </a>
          <a
            className="font-medium"
            href="https://utfs.io/f/89815ec0-f410-433e-81bf-7ff2e1982734-vdqc2j.pdf"
            download
          >
            <div className="flex gap-2 p-4 bg-slate-100 rounded-md items-center">
              <FiDownload className="size-6" />
              Curriculum Vitae (CV)
            </div>
          </a>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <div className="text-base font-semibold">Socials</div>
          <div className="flex gap-2 p-4 bg-slate-100 rounded-md items-center">
            <SiGithub className="size-6" />
            <Link
              className="font-medium"
              href="https://github.com/chrismcconn2789"
            >
              Github
            </Link>
          </div>
          <div className="flex gap-2 p-4 bg-slate-100 rounded-md items-center">
            <SiLinkedin className="text-[#0B66C2] size-6" />
            <Link
              className="font-medium"
              href="https://linkedin.com/in/cmcconnell89"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
