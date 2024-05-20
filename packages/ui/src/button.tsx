import { cva, type RecipeVariantProps } from "../styled-system/css";

const buttonStyle = cva({
  base: {
    padding: "8px 16px",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "bold",
  },

  variants: {
    size: {
      small: {
        fontSize: "14px",
        padding: "4px 8px",
      },
      medium: {
        fontSize: "16px",
        padding: "8px 16px",
      },
      large: {
        fontSize: "18px",
        padding: "12px 24px",
      },
    },
    color: {
      primary: {
        backgroundColor: "blue",
        color: "white",
      },
      secondary: {
        backgroundColor: "gray",
        color: "black",
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },
  },

  // compound variants
  compoundVariants: [
    // apply when both small size and primary color are selected
    {
      size: "small",
      color: "primary",
      css: {
        border: "2px solid blue",
      },
    },
    // apply when both large size and secondary color are selected and the button is disabled
    {
      size: "large",
      color: "secondary",
      disabled: true,
      css: {
        backgroundColor: "lightgray",
        color: "darkgray",
        // border: "none",
      },
    },
    // apply when both small or medium size, and secondary color variants are applied
    {
      size: ["small", "medium"],
      color: "secondary",
      css: {
        fontWeight: "extrabold",
      },
    },
  ],
});

export type ButtonVariants = React.ButtonHTMLAttributes<HTMLButtonElement> &
  RecipeVariantProps<typeof buttonStyle>;

export const Button = (props: React.PropsWithChildren<ButtonVariants>) => {
  const { children, color = "primary", size = "medium", ...rest } = props;

  return (
    <button {...rest} className={buttonStyle({ color, size })}>
      {children}
    </button>
  );
};
