interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

interface ArticleResponse {
  totalArticles: number;
  articles: Array<Article>;
}

export type { Article, ArticleResponse };
