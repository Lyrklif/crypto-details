interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string | null;
    url: string;
  };
}

interface ArticleResponse {
  totalArticles: number;
  articles: Array<Article>;
}

enum GOOGLE_NEWS_ERRORS {
  INTERNAL_SERVER = 500,
  LIMIT = 403,
}

export type { Article, ArticleResponse, GOOGLE_NEWS_ERRORS };
