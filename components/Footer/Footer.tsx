import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-between items-center w-full mb-2 mt-4 px-8">
      <div>
        <span className="text-base text-slate-600">
          Chris McConnell &copy; {year}
        </span>
      </div>
      <div className="flex">
        <Button asChild variant="link">
          <Link href="https://github.com/chrismcconn2789">
            <FaGithub className="size-8 text-slate-600 hover:opacity-60 transition-all duration-200" />
          </Link>
        </Button>
        <Button asChild variant="link">
          <Link href="https://linkedin.com/in/cmcconnell89">
            <FaLinkedin className="size-8 text-[#0B66C2] hover:opacity-60 transition-all duration-200" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
