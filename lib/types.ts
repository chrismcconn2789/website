export type BlogType = {
  meta: {
    title: string;
    description: string;
    date: Date;
    tags: string[];
  };
  slug: string;
};
