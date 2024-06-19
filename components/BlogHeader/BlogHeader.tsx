import Link from "next/link";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className=" items-center">
        <a className="flex" href="/">
          <span>
            <RxChevronLeft
              fontWeight={100}
              className="text-teal-400 size-10 -mr-2 stroke-1"
            />
          </span>
          <h1 className="text-4xl tracking-tighter font-bold">
            chrismcconnell.dev
          </h1>
          <span>
            <RxChevronRight
              fontWeight={100}
              className="text-teal-400 size-10 -ml-2 stroke-1"
            />
          </span>
        </a>
      </div>
      <nav className="flex gap-2">
        <ul className="flex gap-2">
          <li>
            <Button
              asChild
              className="font-semibold tracking-tighter underline-offset-8 decoration-teal-400 text-lg"
              variant="link"
            >
              <Link href="/#about">About</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              className="font-semibold tracking-tighter text-lg underline-offset-8 decoration-teal-400"
              variant="link"
            >
              <Link href="/#projects">Projects</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              className="font-semibold tracking-tighter text-lg underline-offset-8 decoration-teal-400"
              variant="link"
            >
              <Link href="/#blog">Blog</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              className="font-semibold tracking-tighter text-lg underline-offset-8 decoration-teal-400"
              variant="link"
            >
              <Link href="/#contact">Contact</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;