import About from "@/components/About/About";
import Blog from "@/components/Blog/Blog";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import { BlogType } from "@/lib/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function Home() {
  const files = fs.readdirSync(path.join("articles"));
  const articles: BlogType[] = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join("articles", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: {
        title: frontMatter?.title as string,
        description: frontMatter?.description as string,
        date: new Date(Date.parse(frontMatter?.date)) as Date,
        tags: frontMatter?.tags as string[],
      },
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <main className="max-w-5xl m-auto flex min-h-screen flex-col items-center gap-20 p-8">
      <Header />
      <About />
      <Projects />
      <Blog blogs={articles} />
      <Contact />
      <Footer />
    </main>
  );
}
