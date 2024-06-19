import BlogHeader from "@/components/BlogHeader/BlogHeader";
import Footer from "@/components/Footer/Footer";
import { Badge } from "@/components/ui/badge";
import { BlogType } from "@/lib/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function Blog() {
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
    <main className="max-w-5xl m-auto flex min-h-screen flex-col gap-16 p-8">
      <BlogHeader />
      <div className="flex">
        <h2 className="flex text-2xl font-bold tracking-tight underline-offset-8 decoration-teal-400 underline justify-self-start">
          Blog
        </h2>
      </div>
      {articles
        .slice(0, 3)
        .sort((a, b) => {
          const dateA = Date.parse(a.meta.date.toString());
          const dateB = Date.parse(b.meta.date.toString());
          return dateA - dateB;
        })
        .map((blog) => (
          <div className="w-full rounded-md bg-slate-100 h-auto shadow-md p-4 flex flex-col gap-2">
            <a key={blog.slug} href={`/blog/${blog.slug}`}>
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold">{blog.meta.title}</h4>
                <p className="text-base text-slate-600">
                  {blog.meta.description}
                </p>
                <div className="flex justify-between mt-2">
                  <div className="flex gap-1">
                    {blog.meta.tags.map((tag, index) => (
                      <Badge className="text-xs font-light" key={tag + index}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="self-end text-sm font-light">
                    {blog.meta.date.toLocaleDateString()}
                  </span>
                </div>
              </div>
            </a>
          </div>
        ))}
      <Footer />
    </main>
  );
}
