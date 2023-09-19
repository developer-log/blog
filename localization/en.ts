export default defineI18nLocale(async () => {
  return {
    title: "Developer log",
    header: { article: "Articles", author: "about the author", project: "Projects" },
    dialog: { accept: "Accept", decline: "Reject" },
    cookie: {
      title: "We use cookies. This allows us to analyze how visitors interact with the site and make it better.",
      description: "By continuing to use the site, you agree to the use of cookies."
    },
    error: {
      title: "An error has occurred!",
      description: "A team of development cats is already working to fix this error.",
      retry: "Try again later or go to the main page",
      go: "to Home Page"
    },
    time: {
      year: {
        less: "Less than {n} years | Less than {n} years",
        fact: "{n} year | {n} years | {n} years",
        more: "More than {n} years | More than {n} years"
      }
    },
    projects: {
      developerLog: {
        short: "One of my biggest projects",
        long: {
          1: "Developer Log - One of my largest projects. I did it more for myself than for other people, because I did not find a normal platform where I could share knowledge.",
          2: "I spent a little over a year developing this blog (this version is already the 3rd iteration), the main audience comes to this blog from other portals. This project is an accumulation of my knowledge from different industries."
        }
      },
      capybara: {
        short: "Cross-platform code review application",
        long: {
          1: "Capybara is a cross-platform code review application that is designed to make the code review process easier.",
          2: "The application has integration with Github and Gitlab, and can also work offline with a local repository."
        }
      }
    },
    hardware: {
      browser: "Browser",
      cliEditor: "Console editor",
      editor: "Editor",
      headphone: "Headphones",
      keyboard: "Keyboard",
      pc: "Main PC",
      search: "Search",
      terminal: "Terminal"
    },
    stack: {
      purpose: {
        first: "First programming language",
        main: "Main programming language",
        backend: "Programming language I use for the backend",
        fun: "A programming language that I'm learning just for fun 🌝"
      }
    },
    page: {
      license: {
        tabTitle: "License",
        title: "Licenses",
        source: "Source",
        license: "License",
        phrase: {
          test: "Tests for",
          host: "Hosted on",
          store: "Stored on",
          made: "Made with",
          work: "Works thanks",
          thanks: "Special thanks to"
        }
      },
      projects: {
        tabTitle: "Projects",
        stack: "Stack",
        links: "Links",
        chooseTitle: "Select one of the projects",
        chooseDescription: "In order to continue, you need to select one of the projects from the list."
      },
      home: {
        tabTitle: "Home",
        title: "Developer log",
        description: "Development log through the eyes of a developer",
        hero: "\"Developer Log\" is a blog written by a developer for other developers. Here you can find articles and notes about modern web technologies and development methods. I share my experience, knowledge and provide accessible guides to dive into the world of development from the basics to advanced techniques. The peculiarity of the blog is a clear presentation of complex topics for a wide audience. Stay up to date with the latest trends and improve your skills with the Developer's Log.",
        telegramButton: "Go to telegram",
        subtitle: "Go to reading"
      },
      posts: {
        tabTitle: "Articles",
        searchPlaceholder: "Find a post by title, description or tag...",
        showNotes: "Show notes",
        stubTitle: "Nothing found",
        stubInfo: "No results were found for your request.",
        stubTryAgain: "Check the search field for typos or write a different query."
      },
      author: {
        tabTitle: "Author",
        hello: "Hello!",
        me: "I am an experienced front-end developer with over four years of successful experience in creating and improving applications. My skills and knowledge cover a wide range of modern web technologies, allowing me to develop high-quality and intuitive applications.",
        pursuit: "I strive to continue to grow as a front-end developer by contributing to the development of modern and innovative web applications. I actively blog and also write on VC, Habr and Telegram.",
        role: "My role included developing and maintaining web applications, ensuring they were responsive and cross-browser compatible, and integrating with backend services. I have been actively involved in architectural decisions and always strive to improve development processes."
      }
    }
  };

});