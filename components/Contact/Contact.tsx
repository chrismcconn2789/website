import Link from "next/link";
import { FiDownload, FiMail } from "react-icons/fi";
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

const Contact = () => {
  return (
    <div id="contact" className="w-full px-8">
      <h2 className="text-2xl font-bold tracking-tighter text-slate-800 underline-offset-8 decoration-teal-400 underline mb-6">
        Contact
      </h2>
      <p className="text-slate-600 mb-4">Get in touch:</p>
      <div className="flex gap-4">
        <div className="w-1/2 flex flex-col gap-2">
          <span className="text-base font-semibold">Email & CV</span>{" "}
          <div className="flex gap-2 p-4 bg-slate-100 rounded-md items-center">
            <FiMail className="size-6" />
            <a className="font-medium" href="mailto:hello@chrismcconnell.dev">
              hello@chrismcconnell.dev
            </a>
          </div>
          {/* TODO: fix up CV and add download back in */}
          <div className="hidden gap-2 p-4 bg-slate-100 rounded-md items-center">
            <FiDownload className="size-6" />
            <a className="font-medium">Curriculum Vitae (CV)</a>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <div className="text-base font-semibold">Socials</div>
          <div className="grid grid-cols-2 gap-2">
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
            <div className="flex gap-2 p-4 bg-slate-100 rounded-md items-center">
              <SiTwitter className="size-6 text-[#1E96E8]" />
              <Link
                className="font-medium"
                href="https://twitter.com/chrismcconnell2"
              >
                Twitter
              </Link>
            </div>
            <div className="flex gap-2 p-4 bg-slate-100 rounded-md items-center">
              <SiInstagram className="size-6 text-[#ED018F]" />
              <Link
                className="font-medium"
                href="https://instagram.com/chrismcconnell904"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
