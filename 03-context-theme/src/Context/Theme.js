import { useContext, createContext } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  Darktheme: () => {},
  LightTheme: () => {},
});

// ----------

export const ThemeProvider = ThemeContext.Provider;

// ----------

export default function useTheame() {
  return useContext(ThemeContext);
}
