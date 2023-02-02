import { styled } from "@phntms/css-components";

import css from "./styles.module.css";

export const BaseButton = styled("button", {
  css: css.baseButton,
  variants: {
    shape: {
      rect: css.baseButton_buttonRect_true,
      square: css.baseButton_buttonSquare_true,
      circle: css.baseButton_buttonCircle_true,
      pill: css.baseButton_buttonPill_true,
    },
    size: {
      large: "large",
      small: css.small,
    },
    pressed: {
      true: css.pressed,
    },
    background: {
      nessie: css.bgNessie,
      transparent: css.bgTransparent,
      white: css.bgWhite,
      ernie: css.bgErnie,
    },
  },
  defaultVariants: {
    size: "large",
    shape: "rect",
    pressed: false,
    background: "white",
  },
});
