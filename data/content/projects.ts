import type { ProjectContent } from "@/types/content";

const projects: ProjectContent = {
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
        short: "projects.developerLog.short",
        long: [
          "projects.developerLog.long.1",
          "projects.developerLog.long.2",
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
          "rust",
          "tauri",
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
        short: "projects.capybara.short",
        long: [
          "projects.capybara.long.1",
          "projects.capybara.long.2",
        ]
      }
    }
  ]
};

export default projects;
