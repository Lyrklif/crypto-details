type SortBy = "relevancy" | "popularity" | "publishedAt";

interface ArticleItem {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface ArticleResponse {
  status: string;
  totalResults: number;
  articles: Array<ArticleItem>;
}

enum NEWS_ERRORS {
  INTERNAL_SERVER = 500,
  LIMIT = 429,
  UNAUTHORIZED = 401,
}

export type { SortBy, ArticleResponse, ArticleItem };
