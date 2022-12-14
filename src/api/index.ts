import coingecko from "./coingecko/endpoints";
import coinpaprika from "./coinpaprika/endpoints";
import messari from "./messari/endpoints";
import minerstat from "./minerstat/endpoints";
import youtube from "./youtube/endpoints";

import type { ApiInterface as Icoingecko } from "./coingecko/endpoints";
import type { ApiInterface as Icoinpaprika } from "./coinpaprika/endpoints";
import type { ApiInterface as Imessari } from "./messari/endpoints";
import type { ApiInterface as Iminerstat } from "./minerstat/endpoints";
import type { ApiInterface as Iyoutube } from "./youtube/endpoints";

interface API_Interface {
  coingecko: Icoingecko;
  coinpaprika: Icoinpaprika;
  messari: Imessari;
  minerstat: Iminerstat;
  youtube: Iyoutube;
}

const API: API_Interface = {
  coingecko: coingecko,
  coinpaprika: coinpaprika,
  messari: messari,
  minerstat: minerstat,
  youtube: youtube,
};

export default API;
