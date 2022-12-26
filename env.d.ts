/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly VITE_COINGECKO_API: string;
  readonly VITE_COIN_PAPRIKA_API: string;
  readonly VITE_MINERSTAT_API: string;
  readonly VITE_MESSARI_API: string;
  readonly VITE_YOUTUBE_API: string;
  readonly VITE_YOUTUBE_API_KEY: string;
  readonly VITE_CRYPTOPANIC_API: string;
  readonly VITE_CRYPTOPANIC_API_KEY: string;
}
