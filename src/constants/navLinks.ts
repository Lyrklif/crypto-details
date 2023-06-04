interface NAV_LINK {
  label: string;
  name: string;
  icon?: string;
  params?: { page: number };
}

const startNewsPage = 1;
const maxNewsPage = 10;

const homeLink: NAV_LINK = {
  name: "home",
  label: "header.home",
  icon: "pi pi-home",
};
const aboutLink: NAV_LINK = {
  label: "header.news",
  name: "news",
  params: { page: startNewsPage },
  icon: "pi pi-compass",
};

const navLinks: Array<NAV_LINK> = [homeLink, aboutLink];

export default navLinks;
export { homeLink, aboutLink, startNewsPage, maxNewsPage };
export type { NAV_LINK };
