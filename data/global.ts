// global.ts

// ------------------------
// Types
// ------------------------
export type Route = {
  title: string;
  path: string;
  disabled?: boolean; // optional flag to hide/disable route
};

export type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

export type Footer = {
  columns: FooterCol[];
};

// ------------------------
// Routes
// ------------------------
export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  // {
  //   title: "Certifications",
  //   path: "/certifications",
  //   disabled: true, // hide/disable this entry for now
  // },
];

// ------------------------
// Footer
// ------------------------
export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Certifications",
          link: "/",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/sujethlasrado",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/sujethlasrado-1999/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "https://mail.google.com/mail/?view=cm&fs=1&to=sujethlasrado0804@gmail.com&su=Portfolio%20Inquiry",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
};
