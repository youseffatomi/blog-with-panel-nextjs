import { createTheme } from "flowbite-react";

const Theme = createTheme({
  card: {
    root: {
      base: "rounded-3xl border-none shadow-none",
    },
  },
  button: {
    base: "rounded-xl",

    color: {
      default: "bg-primary",
      secondary: "bg-secondary hover:bg-third text-white hover:text-black",
      third: "bg-third",
    },
    outlineColor: {
      default: "border-primary hover:bg-primary border-2 transition-all",
      secendary: "border-secendary hover:bg-secendar border-2 transition-all",
      third: "border-third hover:bg-third border-2 transition-all",
    },
  },
  textInput: {
    base: "rounded-xl",
    field: {
      input: {
        base: "rounded-2xl",
      },
    },
  },
  sidebar: {
    root: {
      base: "h-full",
      inner: "bg-[none]",
    },
    item: {
      base: "group hover:bg-secondary text-black transition-all hover:text-white",
      icon: { base: "text-black transition-all group-hover:text-white" },
    },
  },
});

export default Theme;
