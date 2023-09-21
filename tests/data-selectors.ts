export default {
  header: {
    navigationItem: "header-nav-i",
  },
  compactPost: {
    item: "compact-post-item",
  },
  fullPost: {
    item: "full-post-item",
  },
  themeSwitcher: "theme-switcher",
};

export function getDataSelector(selector: string): string {
  return `[data-test=${selector}]`;
}
