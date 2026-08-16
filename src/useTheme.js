import { useEffect, useState } from "react";

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const timer = setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 350);

    return () => clearTimeout(timer);
  }, [theme]);

  function toggleTheme() {
    document.documentElement.classList.add("theme-transition");
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return { theme, toggleTheme };
}
