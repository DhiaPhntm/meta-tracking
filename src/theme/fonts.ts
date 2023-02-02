import localFont from "@next/font/local";

//TODO: Add proxima nova

export const SHARP_SANS_MEDIUM = localFont({
  src: "../../public/static/fonts/shsn-medium.woff2",
  variable: "--shsn-medium",
  fallback: ["sans-serif"],
  weight: "400",
});

export const SHARP_SANS_BOLD = localFont({
  src: "../../public/static/fonts/shsn-bold.woff2",
  variable: "--shsn-bold",
  fallback: ["sans-serif"],
  weight: "700",
});

export const SHARP_SANS_SEMI_BOLD = localFont({
  src: "../../public/static/fonts/shsn-semi-bold.woff2",
  variable: "--shsn-semi-bold",
  fallback: ["sans-serif"],
  weight: "600",
});

export const SHARP_SANS_BLACK = localFont({
  src: "../../public/static/fonts/shsn-black.otf",
  variable: "--shsn-black",
  fallback: ["sans-serif"],
  weight: "600",
});

export const NATIONAL_BLACK_ITALIC = localFont({
  src: "../../public/static/fonts/National-BlackItalic.woff2",
  variable: "--ntnl-black-italic",
  fallback: ["sans-serif"],
  weight: "900",
});

export const fontClasses = [
  SHARP_SANS_MEDIUM.variable,
  SHARP_SANS_SEMI_BOLD.variable,
  SHARP_SANS_BOLD.variable,
  SHARP_SANS_BLACK.variable,
  NATIONAL_BLACK_ITALIC.variable,
].join(" ");
