export default {
  list: [
    {
      name: "Developer Log",
      stack: {
        primary: [
          "typescript",
          "nuxt",
          "sass"
        ],
        additional: [
          "eslint",
          "stylelint",
          "vite",
          "ava",
          "playwright"
        ]
      },
      description: {
        short: "Один из моих самых больших проектов",
        long: [
          "Developer Log - Один из моих самых крупных проектов. Я делал его больше для себя, нежели для других людей, ибо не нашел нормальной платформы, где мог бы делиться знаниями.\n",
          "На разработку данного блога я потратил чуть больше года (данная версия - уже 3-я итерация), основная аудитория приходит на данный блог из других порталов. Данный проект является накоплением моих знаний из разных отраслей.\n",
        ]
      },
      links: [
        {
          type: "github",
          url: "https://github.com/tokiory-blog/blog"
        }
      ]
    },
    {
      name: "Capybara",
      stack: {
        primary: [
          "typescript",
          "react",
          "sass"
        ],
        additional: [
          "eslint",
          "stylelint",
          "vite",
          "uvu",
          "playwright"
        ]
      },
      description: {
        short: "Кросс-платформенное приложение для код-ревью",
        long: [
          "Capybara - кроссплатформенное приложение для код-ревью, которое создано для того чтобы облегчить сам процесс код-ревью.\n",
          "Приложение имеет интеграцию с Github и Gitlab, а также может работать автономно с локальным репозиторием.\n",
        ]
      }
    }
  ]
};
