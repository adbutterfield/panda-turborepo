import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonVariants } from "./button";

const meta: Meta<ButtonVariants> = {
  component: Button,
  argTypes: {
    children: {
      control: false,
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;

type Story = StoryObj<ButtonVariants>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: ({ children, ...rest }) => (
    <Button
      {...rest}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      {children}
    </Button>
  ),
  name: "Button",
  args: {
    children: "Hello",
  },
};
