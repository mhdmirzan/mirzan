import tailwindcss from "@tailwindcss/vite"
import { definePerson } from "nuxt-schema-org/schema"

// https://nuxt.com/docs/api/configuration/nuxt-config
const IS_DEV = import.meta.dev

export default defineNuxtConfig({
  colorMode: {
    preference: "system",
    fallback: "dark",
    classSuffix: "",
  },

  css: ["./app/assets/css/main.css"],

  compatibilityDate: "2025-06-01",

  content: {
    renderer: {
      anchorLinks: false,
    },
    build: {
      markdown: {
        rehypePlugins: {
          "rehype-external-links": {
            target: "_blank",
            rel: "noopener noreferer",
          },
        },
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: "github-light",
            // Theme used if `html.dark`
            dark: "github-dark",
            // Theme used if `html.sepia`
            sepia: "monokai",
          },
        },
        toc: {
          depth: 2,
          searchDepth: 2,
        },
      },
    },
    preview: {
      dev: IS_DEV,
      api: "https://api.nuxt.studio",
      gitInfo: {
        name: "mirzan.js.org",
        owner: "mirzan",
        url: "https://github.com/mhdmirzan/mirzan.js.org",
      },
    },
  },

  debug: false,

  devtools: { enabled: IS_DEV },

  experimental: {
    typedPages: true,
    buildCache: true,
    headNext: true,
    lazyHydration: true,
    sharedPrerenderData: true,
    viewTransition: true,
  },

  future: {
    compatibilityVersion: 4,
  },

  // fonts: {},

  icon: {
    clientBundle: {
      scan: true,
    },
  },

  // image: {
  //   domains: ["mubaidr.js.org"],
  //   format: ["webp"],
  //   quality: 80,
  // },

  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/ui",
    // "@nuxt/image",
    // "@nuxtjs/mdc",
    "@nuxtjs/seo",
    // "nuxt-feedme",
    "@nuxt/content",
    "nuxt-mcp",
  ],

  nitro: {
    preset: "github-pages",
    prerender: {
      crawlLinks: true,
      failOnError: false,
      autoSubfolderIndex: true,
    },
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
  },

  routeRules: {
    "/**": {
      static: true,
      prerender: true,
    },
    "/blog/**": {
      static: true,
      prerender: true,
    },
  },

  site: {
    indexable: true,
    url: "https://mirzan.js.org",
    name: "Mohammed Mirzan - Data Engineer & AI Enthusiast",
    description:
      "Data engineer and AI enthusiast focused on building smart, scalable solutions using Python, SQL, Snowflake, and AWS.",
    defaultLocale: "en",
    enabled: true,
  },

  ssr: true,

  typescript: {
    strict: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  schemaOrg: {
    identity: definePerson({
      // Basic Information, if applicable
      name: "Mohammed Mirzan F.",
      givenName: "Mohammed",
      familyName: "Mirzan",
      additionalName: "mubaidr", // middle name or other additional names
      alternateName: "Mohammed Mirzan F.",

      // Profile Information, if applicable
      image: "/mirzan.png",
      description:
        "Senior Software Engineer specializing in modern web technologies. Crafting scalable web applications and browser extensions for startups and founders.",
      jobTitle:
        "Senior Software Engineer | Full-Stack Developer | DevOps Enthusiast",

      // Contact & Social, if applicable
      email: "mirzanfawas@gmail.com",
      url: "https://mirzan.js.org",
      sameAs: [
        "https://twitter.com/Mirzanfawas",
        "https://github.com/mhdmirzan",
        "https://linkedin.com/in/mirzanfawas",
      ],

      // Professional Details, if applicable
      worksFor: {
        "@type": "Organization",
        name: "Paragon Square Inc.",
        url: "https://paragonsquare.ai",
      },
    }),
  },
})
