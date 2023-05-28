import { selector } from "recoil";
import { themeState } from "./themeState";

export const ThemeCss = selector({
  key: "themeCss",
  get: ({ get }) => {
    const atom = get(themeState);
    switch (atom) {
      case "light":
        return {
          background: "#F0F0F0",
          fontColor: "#333333",
        };
      case "dark":
        return {
          background: "#606060",
          fontColor: "#FFFFFF",
        };
    }
    throw new Error();
  },
});
