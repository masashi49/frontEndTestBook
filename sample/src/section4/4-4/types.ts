export type Article = {
  id: string;
  createdAt: string;
  tags: string[];
  title: string;
};

export type Articles = { articles: Article[] };
