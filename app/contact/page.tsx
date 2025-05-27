import PageHeader from "@/components/page-header";
import Link from "next/link";

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
