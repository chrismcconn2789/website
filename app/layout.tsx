import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "chrismcconnell.dev",
  description: "Chris McConnell Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/programming.png" sizes="any" />
      </head>
      <body className={`${poppins.className} bg-black`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <header className="flex w-full h-16 shrink-0 items-center gap-2 border-b border-zinc-900 px-4">
              <SidebarTrigger className="bg-black text-zinc-500 m-4 size-5 hover:bg-black hover:text-zinc-100" />
              <div className="flex w-full justify-end mr-4">
                <span className="text-sm text-zinc-400">
                  chrismcconnell.dev
                </span>
              </div>
            </header>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
