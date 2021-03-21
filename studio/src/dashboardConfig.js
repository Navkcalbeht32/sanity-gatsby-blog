export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60569abdeb15817479b418b7",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8wip2d9x",
                  apiId: "1a6e6f3e-4d48-4418-84ba-a56106f5ddc1",
                },
                {
                  buildHookId: "60569abd26de523e6852d5eb",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-rxzq76e8",
                  apiId: "52e786bf-0bc8-4d11-8018-4299d3c82170",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Navkcalbeht32/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-rxzq76e8.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
