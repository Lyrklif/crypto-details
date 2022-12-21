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
    const locale = navigator.language || "en";
    return date.toLocaleDateString(locale);
  },
  percent(value, decimalPlaces = 2) {
    if (!value) return value;
    return `${value.toFixed(decimalPlaces)}%`;
  },
  price(value, decimalPlaces = 4) {
    if (!value) return value;
    return value.toFixed(decimalPlaces);
  },
};

export default filters;
export type { MixinsInterface };
