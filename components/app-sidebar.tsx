import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Button } from "./ui/button";

const navItems = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="hover:text-zinc-100 hover:cursor-pointer w-fit">
      <Button
        variant="link"
        asChild
        className="text-zinc-500 hover:text-white hover:no-underline text-lg"
      >
        <Link href={href}>{children}</Link>
      </Button>
    </li>
  );
}

const socialLinkItems = [
  {
    href: "https://github.com/chrismcconnell",
    icon: <SiGithub className="text-zinc-500 group-hover/git:text-zinc-200" />,
  },
  {
    href: "https://www.linkedin.com/in/chrismcconnell/",
    icon: (
      <SiLinkedin className="text-zinc-500 group-hover/git:text-zinc-200" />
    ),
  },
];

function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="hover:text-zinc-100 hover:cursor-pointer w-fit">
      <Button
        asChild
        variant="ghost"
        size="icon"
        className="hover:bg-transparent size-6 group/git"
      >
        <Link href={href} target="_blank">
          {children}
        </Link>
      </Button>
    </li>
  );
}

export function AppSidebar() {
  return (
    <Sidebar className="border-zinc-900">
      <SidebarHeader className="bg-black">
        <div className="flex flex-col p-2">
          <h1 className="text-2xl font-semibold text-zinc-100">
            Chris McConnell
          </h1>
          <p className="text-sm text-zinc-500">Software Engineer</p>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-black items-center justify-center">
        <SidebarMenu>
          <div className="text-white px-2">
            <ul className="text-zinc-200 text-lg">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </ul>
          </div>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="bg-black">
        <div className="flex justify-between items-center px-2">
          <div className="text-xs text-zinc-500">chrismcconnell.dev © 2025</div>
          <ul className="flex gap-1">
            {socialLinkItems.map((item) => (
              <SocialLink key={item.href} href={item.href}>
                {item.icon}
              </SocialLink>
            ))}
          </ul>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
