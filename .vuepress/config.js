module.exports = {
  base: "/",
  title: "Prague GM Events",
  heading: "GM Prague 2023",
  subHeading: "1. January - 10. January 2023",
  calendarHeading: "January 2023",
  sumbitEventLink: "https://pwn.xyz/",
  startDate: {
    day: 1,
    month: 1,
    year: 2023,
  },
  endDate: {
    day: 10,
    month: 1,
    year: 2023,
  },
  daysInFirstMonth: 31,
  startHour: 9,
  endHour: 22,
  duarationInDays: 1,
  dayNames: ["Sunday"],
  layout: 1, // 0 - banner layout, 1 - venue layout
  bannerPath: "logo_gm_events.svg", // only if banner layout
  venues: [
    {
      name: "Paralelni Polis",
      desc: "yay",
      path: "logo_gm_events.svg",
    },
  ], // only if venue layout
  head: [
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["link", { rel: "icon", href: "./logo_gm_events.svg" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Events",
        link: "/events/",
      },
      {
        text: "Calendar",
        link: "/calendar/",
      },
      {
        text: "PWN",
        link: "https://pwn.xyz/",
      },
    ],
    logo: "logo_gm_events.svg",
    search: false,
    // Assumes GitHub. Can also be a full GitLab url.
    // repo: 'JosefJ/PragueBlockchainWeek',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    // repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    // docsRepo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo:
    // docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "master",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    // editLinkText: 'Help us improve this page!'
  },
};
