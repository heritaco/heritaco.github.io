// al-folio-compatible theme behavior with light as the first-visit default.

let determineThemeSetting = () => {
  const stored = localStorage.getItem("theme");
  return ["light", "dark", "system"].includes(stored) ? stored : "light";
};

let determineComputedTheme = () => {
  const setting = determineThemeSetting();
  if (setting === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return setting;
};

let setHighlight = (theme) => {
  const light = document.getElementById("highlight_theme_light");
  const dark = document.getElementById("highlight_theme_dark");
  if (!light || !dark) return;
  light.media = theme === "dark" ? "none" : "";
  dark.media = theme === "dark" ? "" : "none";
};

let setSearchTheme = (theme) => {
  const search = document.querySelector("ninja-keys");
  if (search) search.classList.toggle("dark", theme === "dark");
};

let setGiscusTheme = (theme) => {
  const frame = document.querySelector("iframe.giscus-frame");
  if (frame) frame.contentWindow.postMessage({ giscus: { setConfig: { theme } } }, "https://giscus.app");
};

let applyTheme = () => {
  const theme = determineComputedTheme();
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.setAttribute("data-theme-setting", determineThemeSetting());
  setHighlight(theme);
  setSearchTheme(theme);
  setGiscusTheme(theme);
  document.querySelectorAll("table").forEach((table) => table.classList.toggle("table-dark", theme === "dark"));
};

let setThemeSetting = (setting) => {
  localStorage.setItem("theme", setting);
  applyTheme();
};

let toggleThemeSetting = () => {
  const setting = determineThemeSetting();
  setThemeSetting(setting === "light" ? "dark" : setting === "dark" ? "system" : "light");
};

let initTheme = () => {
  if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");
  applyTheme();
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (determineThemeSetting() === "system") applyTheme();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("light-toggle");
  if (toggle) toggle.addEventListener("click", toggleThemeSetting);
  applyTheme();
});
