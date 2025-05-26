import PageHeader from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogType } from "@/lib/types";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";

export default function BlogPage() {
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
    <PageHeader title="Blog">
      <div className="flex flex-col gap-4 w-full mt-4 px-1 sm:px-4 mb-8">
        {articles.map((article) => (
          <ArticleItem key={article.slug} article={article} />
        ))}
      </div>
    </PageHeader>
  );
}

function ArticleItem({ article }: { article: BlogType }) {
  return (
    <div className="flex flex-col gap-4 px-4 pt-4 pb-2 border-zinc-900 border">
      <h2 className="text-base text-zinc-200 font-semibold">
        {article.meta.title}
      </h2>
      <p className="text-zinc-400 text-sm">{article.meta.description}.</p>
      <div className="flex flex-col sm:flex-row gap-2 items-start justify-between">
        <div className="flex flex-wrap gap-2">
          {article.meta.tags.map((tag) => (
            <Badge
              key={tag}
              className="text-xs self-center h-fit font-normal bg-transparent border-zinc-900 border rounded-full text-zinc-300 hover:bg-zinc-900"
            >{`#${tag}`}</Badge>
          ))}
        </div>
        <Button
          asChild
          variant="link"
          className="text-zinc-200 self-end"
          size="sm"
        >
          <Link className="text-xs" href={`/blog/${article.slug}`}>
            Read more...
          </Link>
        </Button>
      </div>
    </div>
  );
}
