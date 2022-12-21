interface MixinsInterface {
  hostname: (value: string) => string;
  date: (value: string) => string;
}

const filters: MixinsInterface = {
  hostname(value: string) {
    if (!value) return value;
    const { hostname } = new URL(value);
    return hostname;
  },
  date(value: string) {
    if (!value) return value;
    const date = new Date(value);
    const locale = navigator.language || "en";
    return date.toLocaleDateString(locale);
  },
};

export default filters;
export type { MixinsInterface };
