import "../src/index.css";

import type { Preview } from "@storybook/react";

const globalTypes = {
  mode: {
    name: "Mode",
    description: "Design System Theme",
    toolbar: {
      title: "Mode",
      icon: "mirror",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
    },
  },
};

const withMode = (story, context) => {
  const { mode } = context.globals;
  if (mode === "dark" && !document.location.search.includes("--docs")) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return story();
};

const preview: Preview = {
  globalTypes,
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  decorators: [withMode],
};

export default preview;
