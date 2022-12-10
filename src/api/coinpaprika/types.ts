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

interface GetCoinByIDResponse {
  id: string;
  name: string;
  symbol: string;
  parent: {
    id: string;
    name: string;
    symbol: string;
  };
  rank: number;
  is_new: false;
  is_active: true;
  type: string;
  logo: string;
  tags: Array<{
    id: string;
    name: string;
    coin_counter: number;
    ico_counter: number;
  }>;
  team: Array<{
    id: string;
    name: string;
    position: string;
  }>;
  description: string;
  message: string;
  open_source: true;
  hardware_wallet: true;
  started_at: string;
  development_status: string;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  contract: string;
  platform: string;
  contracts: Array<{
    contract: string;
    platform: string;
    type: string;
  }>;
  links: {
    explorer: Array<string>;
    facebook: Array<string>;
    reddit: Array<string>;
    source_code: Array<string>;
    website: Array<string>;
    youtube: Array<string>;
    medium: null;
  };
  links_extended: Array<{
    url: string;
    type: string;
    stats?: {
      contributors?: number;
      stars?: number;
    };
  }>;
  whitepaper: {
    link: string;
    thumbnail: string;
  };
  first_data_at: string;
  last_data_at: string;
}

export type {
  SearchCurrencyItem,
  SearchIcosItem,
  SearchExchangesItem,
  SearchPeopleItem,
  SearchTagsItem,
  SearchResponse,
  GetCoinByIDResponse,
};
