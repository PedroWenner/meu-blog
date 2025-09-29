import React from "react";

type ColorMode = "light" | "dark";
type Ctx = { mode: ColorMode; toggle: () => void };

export const ColorModeContext = React.createContext<Ctx>({
  mode: "light",
  toggle: () => {},
});

export function useColorModeProvider() {
  const [mode, setMode] = React.useState<ColorMode>(() => {
    const saved = localStorage.getItem("color-mode");
    return (saved as ColorMode) || "light";
  });

  const toggle = React.useCallback(() => {
    setMode((m) => (m === "light" ? "dark" : "light"));
  }, []);

  React.useEffect(() => {
    localStorage.setItem("color-mode", mode);
    document.documentElement.setAttribute("data-color-mode", mode);
  }, [mode]);

  return { mode, toggle };
}
