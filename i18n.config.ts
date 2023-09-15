import be from "@/localization/be.json";
import en from "@/localization/en.json";
import kk from "@/localization/kk.json";
import ko from "@/localization/ko.json";
import ru from "@/localization/ru.json";

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
