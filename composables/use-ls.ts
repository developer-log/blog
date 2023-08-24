enum LocalStorageKey {
  CookieAgreement = "cookie-agreement",
  ArticleLastVisited = "article-last-visited",
}

const trySetValue = (key: LocalStorageKey, value: unknown) => {
  try {
    return localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

const tryGetValue = <T>(key: LocalStorageKey): T | undefined => {
  try {
    return localStorage.getItem(key) as T;
  } catch {
    return;
  }
};

const useLS = () => {
  return {
    cookie: {

      // Status that indicates whether the user has agreed to the cookie policy
      agreement: {
        set: (value: boolean) => trySetValue(LocalStorageKey.CookieAgreement, value),
        get: () => tryGetValue<boolean>(LocalStorageKey.CookieAgreement),
      }
    },
    article: {

      // Last visited article
      last: {
        set: (value: string) => trySetValue(LocalStorageKey.ArticleLastVisited, value),
        get: () => tryGetValue<string>(LocalStorageKey.ArticleLastVisited),
      }
    }
  };
};

export default useLS;
