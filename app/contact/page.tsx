import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload, FiMail } from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <SiLinkedin className="size-5" />,
    href: "https://linkedin.com/in/cmcconnell89",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="size-5" />,
    href: "https://github.com/chrismcconn2789",
  },
];

const otherLinks = [
  {
    name: "Email",
    icon: <FiMail className="size-5" />,
    href: "mailto:hello@chrismcconnell.dev",
  },
  {
    name: "CV",
    icon: <FiDownload className="size-5" />,
    href: "https://utfs.io/f/89815ec0-f410-433e-81bf-7ff2e1982734-vdqc2j.pdf",
    download: true,
  },
];

function SocialItemButton({
  name,
  icon,
  href,
}: {
  name: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <Button
      asChild
      variant="default"
      size="lg"
      className="text-zinc-300 flex gap-2 border rounded-none border-zinc-900 bg-transparent hover:bg-zinc-900"
    >
      <Link href={href} className="flex items-center gap-2">
        {icon}
        <span>{name}</span>
      </Link>
    </Button>
  );
}

function OtherItemButton({ name, icon, href }: any) {
  return (
    <Button
      asChild
      variant="default"
      size="lg"
      className="text-zinc-300 flex gap-2 border rounded-none border-zinc-900 bg-transparent hover:bg-zinc-900"
    >
      <a href={href} download={true} className="flex items-center gap-2">
        {icon}
        <span>{name}</span>
      </a>
    </Button>
  );
}

export default function ContactPage() {
  return (
    <PageHeader title="Contact">
      <div className="flex flex-col items-center sm:p-4 p-1">
        <p className="text-zinc-400">Contact form coming soon...</p>
        <p className="text-zinc-400 mt-4 text-sm text-center">
          In the meantime drop me an email on{" "}
          <Link className="underline" href={"mailto:hello@chrismcconnell.dev"}>
            hello@chrismcconnell.dev
          </Link>{" "}
          or check out my social links in the sidebar
        </p>
      </div>
    </PageHeader>
  );
}
