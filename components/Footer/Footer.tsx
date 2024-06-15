import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col gap-2 items-center w-full mb-2">
      <div className="flex">
        <Button asChild variant="link">
          <Link href="https://github.com/chrismcconn2789">
            <FaGithub className="size-8 text-slate-600 hover:opacity-60 transition-all duration-200" />
          </Link>
        </Button>
        <Button asChild variant="link">
          <Link href="https://linkedin.com/in/chrismcconnell89">
            <FaLinkedin className="size-8 text-sky-600 hover:opacity-60 transition-all duration-200" />
          </Link>
        </Button>
      </div>
      <div>
        <span className="text-base text-slate-600">
          Chris McConnell &copy; {year}
        </span>
      </div>
    </div>
  );
};

export default Footer;
