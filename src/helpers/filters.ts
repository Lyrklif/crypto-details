import { useSettingsStore } from "../stores/settings";
import { defaultInterfaceLang } from "../constants/settings";

interface MixinsInterface {
  hostname: (value: string) => string;
  date: (value: string) => string;
  percent: (value: number, decimalPlaces?: number) => string | number;
  price: (value: number, decimalPlaces?: number) => string | number;
}

const filters: MixinsInterface = {
  hostname(value) {
    if (!value) return value;
    const { hostname } = new URL(value);
    return hostname;
  },
  date(value) {
    if (!value) return value;
    const date = new Date(value);
    const settingsStore = useSettingsStore();
    const locale =
      settingsStore.lang || navigator.language || defaultInterfaceLang;

    return date.toLocaleDateString(locale);
  },
  percent(value, decimalPlaces = 2) {
    if (!value) return value;
    return `${value.toFixed(decimalPlaces)}%`;
  },
  price(value, decimalPlaces = 4) {
    if (!value) return value;
    const settingsStore = useSettingsStore();
    const locale =
      settingsStore.lang || navigator.language || defaultInterfaceLang;

    return value.toLocaleString(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimalPlaces,
      style: "currency",
      currency: "USD",
    });
  },
};

export default filters;
export type { MixinsInterface };
