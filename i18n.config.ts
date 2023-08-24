import be from "@l/be";
import en from "@l/en";
import ko from "@l/ko";
import ru from "@l/ru";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ru",
  messages: {
    ru, // Russian
    en, // English
    ko, // Korean
    be, // Belarussian,
  }
}));
