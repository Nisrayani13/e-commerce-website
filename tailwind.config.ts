import type { Config } from "tailwindcss";
import daisyui from "daisyui"
import { url } from "inspector";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        footerBackground: "rgb(241,228,184)",
        topbarBackground:"rgb(234,225,245)"
      },
      backgroundImage:{
        'lady-with-bag': "url('/lady_with_bag.png')"
      }
    },
  },
  plugins: [
    daisyui,
  ],
} satisfies Config;
