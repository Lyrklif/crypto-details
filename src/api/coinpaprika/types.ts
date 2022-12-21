interface SearchCurrencyItem {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface SearchIcosItem {
  id: string;
  name: string;
  symbol: string;
  is_new: boolean;
}

interface SearchExchangesItem {
  id: string;
  name: string;
  rank: number;
}

interface SearchPeopleItem {
  id: string;
  name: string;
  teams_count: number;
}

interface SearchTagsItem {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}

interface SearchResponse {
  currencies: Array<SearchCurrencyItem>;
  icos: Array<SearchIcosItem>;
  exchanges: Array<SearchExchangesItem>;
  people: Array<SearchPeopleItem>;
  tags: Array<SearchTagsItem>;
}

enum LINK_EXTENDED_TYPES {
  WEBSITE = "website",
  TWITTER = "twitter",
  TELEGRAM = "telegram",
  SOURCE_CODE = "source_code",
  SLACK = "slack",
  REDDIT = "reddit",
  FACEBOOK = "facebook",
  EXPLORER = "explorer",
  YOUTUBE = "youtube",
  BLOG = "blog",
  MEDIUM = "medium",
  ANNOUNCEMENT = "announcement",
}

interface LinkExtended {
  url: string;
  type: string;
  stats?: {
    contributors?: number;
    stars?: number;
    subscribers?: number;
    members?: number;
    followers?: number;
  };
}

interface TeamItem {
  id: string;
  name: string;
  position: string;
}

interface TagItem {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}

interface GetCoinByIDResponse {
  id: string;
  name: string;
  symbol: string;
  parent?: {
    id: string;
    name: string;
    symbol: string;
  };
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  tags: Array<TagItem>;
  team: Array<TeamItem>;
  description: string;
  message: string;
  open_source: boolean;
  hardware_wallet: boolean;
  started_at: string;
  development_status: string;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  contract?: string;
  platform?: string;
  contracts?: Array<{
    contract: string;
    platform: string;
    type: string;
  }>;
  links: {
    explorer?: null | Array<string>;
    facebook?: null | Array<string>;
    reddit?: null | Array<string>;
    source_code?: null | Array<string>;
    website?: null | Array<string>;
    youtube?: null | Array<string>;
    medium?: null | Array<string>;
  };
  links_extended: Array<LinkExtended>;
  whitepaper: {
    link: string;
    thumbnail: null | string;
  };
  first_data_at: string;
  last_data_at: string;
}

interface GetTwitterItem {
  date: string;
  user_name: string;
  user_image_link: string;
  status: string;
  is_retweet: boolean;
  retweet_count: number;
  like_count: number;
  status_link: string;
  status_id: string;
  media_link?: string;
  youtube_link?: string;
}

interface CoinExchangesItem {
  id: string;
  name: string;
  fiats: Array<{
    name: string;
    symbol: string;
  }>;
  adjusted_volume_24h_share: number;
}

enum MARKET_TRUST {
  NO_DATA = "no_data",
  LOW = "low",
  HIGH = "high",
  MEDIUM = "medium",
}

interface MarketsItemResponse {
  exchange_id: string;
  exchange_name: string;
  pair: string;
  base_currency_id: string;
  base_currency_name: string;
  quote_currency_id: string;
  quote_currency_name: string;
  market_url: string;
  category: string;
  fee_type: string;
  outlier: boolean;
  adjusted_volume_24h_share: number;
  quotes: {
    [someStrKeyWhichIsDynamic: string]: {
      price: number;
      volume_24h: number;
    };
  };
  trust_score: MARKET_TRUST;
  last_updated: string;
}

export type {
  SearchCurrencyItem,
  SearchIcosItem,
  SearchExchangesItem,
  SearchPeopleItem,
  SearchTagsItem,
  SearchResponse,
  GetCoinByIDResponse,
  GetTwitterItem,
  CoinExchangesItem,
  LinkExtended,
  TeamItem,
  TagItem,
  MarketsItemResponse,
};

export { LINK_EXTENDED_TYPES, MARKET_TRUST };
