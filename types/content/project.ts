type ProjectProvider = "github" | "gitlab" | "codepen" | "bitbucket";

interface ProjectItem {
  name: string;
  description: {
    short: string;
    long: string;
  };
  links: Partial<Record<ProjectProvider, string>>;
}

export interface ProjectContent {
  list: ProjectItem[];
}
