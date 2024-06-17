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
      <div className="text-slate-300">Coming soon ...</div>
      {/* <div className="flex flex-col gap-4">
        <div className="w-full rounded-md bg-slate-100 h-[150px] shadow-md p-4 flex flex-col gap-2">
          <h4 className="text-lg font-semibold">React vs Angular in 2024</h4>
          <p className="text-slate-600">
            I take a look at building a simple todo/task list application using
            both Angular and React in 2024 to compare the performance, developer
            experience and general thoughts on each.
          </p>
          <div className="flex gap-1">
            <Badge className="font-light w-fit text-teal-400">#react</Badge>
            <Badge className="font-light w-fit text-teal-400">#angular</Badge>
            <Badge className="font-light w-fit text-teal-400">#dx</Badge>
            <Badge className="font-light w-fit text-teal-400">
              #performance
            </Badge>
          </div>
        </div>
        <div className="w-full rounded-md bg-slate-100 h-[150px] shadow-md p-4 flex flex-col gap-2">
          <h4 className="text-lg font-semibold">Getting Started with NgRx</h4>
          <p className="text-slate-600">
            I walk through getting started with NgRx, a state management library
            and integrating it into your Angular application, the benefits of
            using it & the drawbacks to using a state management solution
          </p>
          <div className="flex gap-1">
            <Badge className="font-light w-fit text-teal-400">#ngrx</Badge>
            <Badge className="font-light w-fit text-teal-400">#angular</Badge>
            <Badge className="font-light w-fit text-teal-400">
              #state-management
            </Badge>
          </div>
        </div>
      </div>
      <Button asChild size="sm" variant="ghost" className="mt-3 self-end">
        <a href="/blog">Read More...</a>
      </Button> */}
    </div>
  );
};

export default Blog;
