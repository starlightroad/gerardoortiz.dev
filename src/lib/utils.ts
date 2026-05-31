export const createMailTo = (email: string) => `mailto:${email}`;

export const getSiteLogoByTheme = (theme: "light" | "dark" | undefined) => {
  return theme === "dark" ? "logo-dark.svg" : "logo-light.svg";
};
