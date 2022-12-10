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

interface CoinPaprikaSearchResponse {
  currencies: Array<SearchCurrencyItem>;
  icos: Array<SearchIcosItem>;
  exchanges: Array<SearchExchangesItem>;
  people: Array<SearchPeopleItem>;
  tags: Array<SearchTagsItem>;
}
