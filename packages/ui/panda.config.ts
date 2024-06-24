import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      borderWidths: {
        small: {
          value: "3px",
        },
      },
    },
    semanticTokens: {
      colors: {
        background: {
          default: {
            value: {
              base: "#ffffff",
              _dark: "#222222",
            },
          },
        },
        border: {
          primary: {
            value: {
              base: "red",
              _dark: "yellow",
            },
          },
        },
        text: {
          primary: {
            value: {
              base: "red",
              _dark: "yellow",
            },
          },
        },
      },
      borders: {
        normal: {
          value: "{borderWidths.small} solid {colors.border.primary}",
        },
      },
    },
  },

  globalCss: {
    body: {
      backgroundColor: "background.default",
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  outExtension: "js",
});
