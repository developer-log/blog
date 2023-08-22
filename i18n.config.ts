import en from "@l/en";
import ru from "@l/ru";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ru",
  messages: {
    ru,
    en,
  }
}));
