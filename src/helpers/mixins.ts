interface MixinsInterface {
  methods: {
    link: (value: string) => string;
    date: (value: string) => string;
  };
}

const mixins: MixinsInterface = {
  methods: {
    link(value) {
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
  },
};

export default mixins;
