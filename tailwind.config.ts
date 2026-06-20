import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        nova: {
          black: "#050505",
          graphite: "#111318",
          violet: "#8B5CF6",
          cyan: "#06B6D4",
          blue: "#2563EB",
          white: "#F8FAFC",
          muted: "#94A3B8",
          red: "#EF4444"
        }
      },
      boxShadow: {
        glow: "0 0 45px rgba(139,92,246,.22)",
        cyan: "0 0 35px rgba(6,182,212,.22)",
        card: "0 24px 80px rgba(0,0,0,.45)"
      },
      backgroundImage: {
        "nova-radial": "radial-gradient(circle at 20% 20%, rgba(139,92,246,.25), transparent 30%), radial-gradient(circle at 80% 10%, rgba(6,182,212,.2), transparent 26%), linear-gradient(135deg, #050505 0%, #111318 100%)",
        "rgb-line": "linear-gradient(90deg, #8B5CF6, #06B6D4, #2563EB, #EF4444, #8B5CF6)"
      },
      keyframes: {
        scan: { "0%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(100%)" } },
        pulseGlow: { "0%, 100%": { opacity: ".45" }, "50%": { opacity: "1" } },
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } }
      },
      animation: {
        scan: "scan 5s linear infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        float: "float 7s ease-in-out infinite"
      }
    },
  },
  plugins: [],
};
export default config;
