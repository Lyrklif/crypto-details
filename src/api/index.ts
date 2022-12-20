import coingecko from "./coingecko/endpoints";
import coinpaprika from "./coinpaprika/endpoints";
import coinranking from "./coinranking/endpoints";
import gnews from "./gnews/endpoints";
import messari from "./messari/endpoints";
import minerstat from "./minerstat/endpoints";
import news from "./news/endpoints";
import youtube from "./youtube/endpoints";

import type { ApiInterface as Icoingecko } from "./coingecko/endpoints";
import type { ApiInterface as Icoinpaprika } from "./coinpaprika/endpoints";
import type { ApiInterface as Icoinranking } from "./coinranking/endpoints";
import type { ApiInterface as Ignews } from "./gnews/endpoints";
import type { ApiInterface as Imessari } from "./messari/endpoints";
import type { ApiInterface as Iminerstat } from "./minerstat/endpoints";
import type { ApiInterface as Inews } from "./news/endpoints";
import type { ApiInterface as Iyoutube } from "./youtube/endpoints";

interface API_Interface {
  coingecko: Icoingecko;
  coinpaprika: Icoinpaprika;
  coinranking: Icoinranking;
  gnews: Ignews;
  messari: Imessari;
  minerstat: Iminerstat;
  news: Inews;
  youtube: Iyoutube;
}

const API: API_Interface = {
  coingecko: coingecko,
  coinpaprika: coinpaprika,
  coinranking: coinranking,
  gnews: gnews,
  messari: messari,
  minerstat: minerstat,
  news: news,
  youtube: youtube,
};

export default API;
