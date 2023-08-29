import be from "@l/be.json";
import en from "@l/en.json";
import kk from "@l/kk.json";
import ko from "@l/ko.json";
import ru from "@l/ru.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ru",
  messages: {
    ru, // Russian
    en, // English
    ko, // Korean
    be, // Belorussian,
    kk, // Kazakh
  }
}));
