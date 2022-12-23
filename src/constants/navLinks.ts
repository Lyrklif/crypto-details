interface NAV_LINK {
  name: string;
  text: string;
}

const homeLink: NAV_LINK = { name: "home", text: "header.home" };
const aboutLink: NAV_LINK = { name: "about", text: "header.about" };

const navLinks: Array<NAV_LINK> = [homeLink, aboutLink];

export default navLinks;
export { homeLink, aboutLink };
export type { NAV_LINK };
