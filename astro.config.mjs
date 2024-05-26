import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Bee Aloha Apiaries",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/styles.css",
      ],
      //   social: {
      //     web: "https://github.com/withastro/starlight",
      //   },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Introduction",
              link: "/guides/introduction/",
            },
            {
              label: "Understanding Swarms",
              link: "/guides/understanding/",
            },
            {
              label: "Communication",
              link: "/guides/communication/",
            },
          ],
        },
        {
          label: "Beekeeping in Maui",
          autogenerate: {
            directory: "maui",
          },
        },
      ],
    }),
  ],
});
