import Link from "next/link";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex items-center">
        <span>
          <RxChevronLeft
            fontWeight={100}
            className="text-teal-400 size-10 -mr-2 stroke-1"
          />
        </span>
        <h1 className="text-3xl tracking-tighter font-medium">
          chrismcconnell.dev
        </h1>
        <span>
          <RxChevronRight
            fontWeight={100}
            className="text-teal-400 size-10 -ml-2 stroke-1"
          />
        </span>
      </div>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Button
              asChild
              className="font-regular tracking-tight text-base underline-offset-8 decoration-teal-500 decoration-2 hover:decoration-teal-500"
              variant="link"
            >
              <Link href="#projects">About</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              className="font-regular tracking-tight text-base underline-offset-8  decoration-teal-500 decoration-2 hover:decoration-teal-500"
              variant="link"
            >
              <Link href="#projects">Projects</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              className="font-regular tracking-tight text-base underline-offset-8  decoration-teal-500 decoration-2 hover:decoration-teal-500"
              variant="link"
            >
              <Link href="#projects">Blog</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              className="font-regular tracking-tight text-base underline-offset-8  decoration-teal-500 decoration-2 hover:decoration-teal-500"
              variant="link"
            >
              <Link href="#projects">Contact</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
