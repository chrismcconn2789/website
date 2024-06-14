import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex">
        <Button asChild variant="link">
          <Link href="https://github.com/chrismcconn2789">
            <FaGithub className="size-6 text-slate-400" />
          </Link>
        </Button>
        <Button asChild variant="link">
          <Link href="https://linkedin.com/in/chrismcconnell89">
            <FaLinkedin className="size-6 text-sky-500" />
          </Link>
        </Button>
      </div>
      <div>
        <span className="text-base text-slate-300">
          Chris McConnell &copy; {year}
        </span>
      </div>
    </div>
  );
};

export default Footer;
