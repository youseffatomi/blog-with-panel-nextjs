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
      secendary: "bg-secendary",
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
});

export default Theme;
