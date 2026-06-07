export const createMailTo = (email: string) => `mailto:${email}`;

export const getSiteLogoByTheme = (theme: "light" | "dark" | undefined) => {
  return theme === "dark" ? "logo-dark.svg" : "logo-light.svg";
};

export const isMatch = (value1: string, value2: string) => value1.trim().toLowerCase() === value2.trim().toLowerCase();
