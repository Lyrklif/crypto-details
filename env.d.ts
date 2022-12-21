/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly VITE_COINGECKO_API: string;
  readonly VITE_SIMPLESWAP_API: string;
  readonly VITE_SIMPLESWAP_API_KEY: string;
  readonly VITE_COINCAP_API: string;
  readonly VITE_COINCAP_API_KEY: string;
  readonly VITE_COIN_PAPRIKA_API: string;
  readonly VITE_GOOGLE_NEWS_API: string;
  readonly VITE_GOOGLE_NEWS_API_KEY: string;
  readonly VITE_MINERSTAT_API: string;
  readonly VITE_MESSARI_API: string;
  readonly VITE_YOUTUBE_API: string;
  readonly VITE_YOUTUBE_API_KEY: string;
}
