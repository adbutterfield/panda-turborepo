import { dirname, join, resolve } from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config = {
  stories: ["../src/*.stories.tsx", "../src/**/*.stories.tsx"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-docs"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },

  core: {},

  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      plugins: [react(), tsconfigPaths(), ...config.plugins],
    };
  },

  docs: {
    autodocs: true,
  },
};

export default config;
