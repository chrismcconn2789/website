import BlogHeader from "@/components/BlogHeader/BlogHeader";
import Footer from "@/components/Footer/Footer";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";

import "@/styles/tokyo-night.css";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight, rehypeAutolinkHeadings, rehypeSlug],
  },
};

type routeParams = {
  params: {
    slug: string;
  };
};

function getPost(slug: string) {
  const markdownFile = fs.readFileSync(
    path.join("articles", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("articles"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const blog = getPost(slug);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}

const ArticlePage = ({ params: { slug } }: routeParams) => {
  const post = getPost(slug);
  return (
    <div className="max-w-5xl m-auto flex min-h-screen flex-col items-center gap-20 p-8">
      <BlogHeader />
      <article className="max-w-5xl prose prose-sm md:prose-base lg:prose-lg prose-slate mx-auto">
        <MDXRemote source={post.content} options={options} />
      </article>
      <Footer />
    </div>
  );
};

export default ArticlePage;
