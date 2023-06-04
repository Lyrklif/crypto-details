import { useInterfaceStore } from "../stores/interface";
import {
  defaultInterfaceCurrency,
  defaultInterfaceLang,
} from "../constants/interface";

const timeFormat: Intl.DateTimeFormatOptions = {
  month: "numeric",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZoneName: "short",
  timeZone: "UTC",
};

interface MixinsInterface {
  hostname: (value: string) => string;
  date: (value: string) => string;
  percent: (value: number, decimalPlaces?: number) => string | number;
  price: (value: number, decimalPlaces?: number) => string | number;
  number: (value: number, decimalPlaces?: number) => string | number;
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
    const settingsStore = useInterfaceStore();
    const locale = settingsStore.lang || defaultInterfaceLang;
    const options: typeof timeFormat = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleDateString(locale, options);
  },
  percent(value, decimalPlaces = 2) {
    if (!value) return value;
    const fixedValue = value.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimalPlaces,
    });

    return `${fixedValue}%`;
  },
  price(value, decimalPlaces = 4) {
    if (!value) return value;
    const settingsStore = useInterfaceStore();
    const locale = settingsStore.lang || defaultInterfaceLang;
    const currency = settingsStore.currency || defaultInterfaceCurrency;

    return value.toLocaleString(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimalPlaces,
      style: "currency",
      currency: currency,
    });
  },
  number(value, decimalPlaces = 4) {
    if (!value) return value;

    return value.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimalPlaces,
    });
  },
};

export default filters;
export type { MixinsInterface };
