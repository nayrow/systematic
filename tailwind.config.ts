import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#5101C2",
        secondary: "#F2F522",
        complementary: "#F9F290",
        dark: "#242127",
        light:"#D3D3D2",
      },
    },
  },
  plugins: [],
} satisfies Config;
