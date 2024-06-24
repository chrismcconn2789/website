import type { BlogType } from "../../lib/types";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Blog = ({ blogs }: { blogs: BlogType[] }) => {
  return (
    <div id="blog" className="w-full flex flex-col px-1 md:px-6">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight underline-offset-8 decoration-teal-400 underline mb-4">
        Blog
      </h2>
      <p className="text-sm md:text-base text-slate-600 mb-4">
        Some of my latest blog articles, click on read more to view more
        articles
      </p>

      <div className="flex flex-col gap-8">
        {blogs
          .slice(0, 3)
          .sort((a, b) => {
            const dateA = Date.parse(a.meta.date.toString());
            const dateB = Date.parse(b.meta.date.toString());
            return dateA - dateB;
          })
          .map((blog) => (
            <div
              key={blog.slug}
              className="w-full rounded-md bg-slate-100 h-auto shadow-md p-4 flex flex-col gap-2"
            >
              <a href={`/blog/${blog.slug}`}>
                <div className="flex flex-col gap-2">
                  <h4 className="text-base md:text-lg font-semibold">
                    {blog.meta.title}
                  </h4>
                  <p className="text-sm md:text-base text-slate-600">
                    {blog.meta.description}
                  </p>
                  <div className="flex justify-between mt-2">
                    <div className="flex flex-wrap gap-1">
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
      </div>
      <Button asChild size="sm" variant="ghost" className=" flex mt-3 self-end">
        <a href="/blog">Read More...</a>
      </Button>
    </div>
  );
};

export default Blog;
