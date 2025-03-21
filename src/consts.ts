import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Clément Landais - Game Programmer",
  TITLE: "Clément Landais",
  SUBTITLE: "Game Programmer",
  EMAIL: "clementlandais@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [

  { 
    NAME: "github",
    ICON: "mdi:github",
    HREF: "https://github.com/clandais"
  },
  { 
    NAME: "linkedin",
    ICON: "mdi:linkedin",
    HREF: "https://www.linkedin.com/in/clement-landais-unity/",
  },
  { 
    NAME: "twitter-x",
    ICON: "mdi:twitter",
    HREF: "https://x.com/_blood_pact_",
  },
];
