type sourceAPINameType =
  | "coingecko"
  | "coinpaprika"
  | "messari"
  | "minerstat"
  | "youtube";

interface sourceAPIInterface {
  [sourceAPINameType: string]: {
    docs: string;
    site: string;
  };
}

const sourceAPI: sourceAPIInterface = {
  coingecko: {
    docs: import.meta.env.VITE_COINGECKO_API,
    site: "https://www.coingecko.com/",
  },
  coinpaprika: {
    docs: import.meta.env.VITE_COIN_PAPRIKA_API,
    site: "https://coinpaprika.com/",
  },
  messari: {
    docs: import.meta.env.VITE_MESSARI_API,
    site: "https://messari.io/",
  },
  minerstat: {
    docs: import.meta.env.VITE_MINERSTAT_API,
    site: "https://minerstat.com/",
  },
  youtube: {
    docs: import.meta.env.VITE_YOUTUBE_API,
    site: "https://www.youtube.com/",
  },
};

export default sourceAPI;
export type { sourceAPINameType };
