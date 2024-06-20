import Link from "next/link";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex flex-col mt-4 md:mt-0 md:flex-row justify-between w-full items-center gap-4">
      <div className="items-center">
        <a className="flex" href="/">
          <span>
            <RxChevronLeft
              fontWeight={100}
              className="text-teal-400 size-9 md:size-10 -mr-2 stroke-1"
            />
          </span>
          <h1 className="text-3xl md:text-4xl tracking-tighter font-bold">
            chrismcconnell.dev
          </h1>
          <span>
            <RxChevronRight
              fontWeight={100}
              className="text-teal-400 size-9 md:size-10 -ml-2 stroke-1"
            />
          </span>
        </a>
      </div>
      <nav className="flex gap-2">
        <ul className="flex flex-wrap gap-2">
          <li>
            <Button
              asChild
              className="font-semibold tracking-tighter text-sm md:text-lg underline-offset-8 decoration-teal-400 p-1 md:py-3 md:px-2"
              variant="link"
            >
              <Link href="/#about">About</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              className="font-semibold tracking-tighter text-sm md:text-lg underline-offset-8 decoration-teal-400 p-1 md:py-3 md:px-2"
              variant="link"
            >
              <Link href="/#projects">Projects</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              className="font-semibold tracking-tighter text-sm md:text-lg underline-offset-8 decoration-teal-400 p-1 md:py-3 md:px-2"
              variant="link"
            >
              <Link href="/#blog">Blog</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              className="font-semibold tracking-tighter text-sm md:text-lg underline-offset-8 decoration-teal-400 p-1 md:py-3 md:px-2"
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
