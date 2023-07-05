import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (str: string) => any;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "",
  setTheme: (string) => {},
});

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") !== "dark" ? "light" : "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    const removePreviousTheme = theme === "dark" ? "light" : "dark";

    root.classList.remove(removePreviousTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}
