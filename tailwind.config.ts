import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        science: ['"Science Gothic"', "system-ui", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        accent: "var(--accent)",
      },
      backgroundImage: {
        "grid-dots":
          "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-dots-size": "16px 16px",
      },
    },
  },
  plugins: [],
} satisfies Config;


