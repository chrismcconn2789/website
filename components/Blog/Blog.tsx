import { Button } from "../ui/button";

const Blog = () => {
  return (
    <div id="blog" className="w-full px-8 flex flex-col">
      <h2 className="text-xl font-medium tracking-tight underline-offset-8 decoration-teal-400 underline mb-4">
        Blog
      </h2>
      <p className="text-base text-slate-600 mb-4">
        Some of my latest blog articles, click on read more to view more
        articles
      </p>
      <div className="flex flex-col gap-4">
        <div className="w-full rounded-md bg-slate-100 h-[150px] shadow-md"></div>
        <div className="w-full rounded-md bg-slate-100 h-[150px] shadow-md"></div>
        <div className="w-full rounded-md bg-slate-100 h-[150px] shadow-md"></div>
      </div>
      <Button asChild size="sm" variant="ghost" className="mt-3 self-end">
        <a href="/blog">Read More...</a>
      </Button>
    </div>
  );
};

export default Blog;
