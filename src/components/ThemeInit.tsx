import { useEffect } from "react";

export function ThemeInit() {
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("md-theme");
      const preferredDark = window.matchMedia?.("(prefers-color-scheme: dark)")
        .matches;
      const initial = stored ?? (preferredDark ? "dark" : "light");
      if (initial === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } catch {
      // ignore
    }
  }, []);

  return null;
}
