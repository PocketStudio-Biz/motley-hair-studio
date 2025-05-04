import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", // Uses #F5F5F5 via globals.css
        foreground: "hsl(var(--foreground))", // Uses #1A1A1A via globals.css
        primary: {
          DEFAULT: "hsl(var(--primary))", // Uses #C5A880 via globals.css
          foreground: "hsl(var(--primary-foreground))", // Text color on primary bg
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Uses #8A2BE2 via globals.css
          foreground: "hsl(var(--secondary-foreground))", // Text color on secondary bg
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Uses #B31375 via globals.css
          foreground: "hsl(var(--accent-foreground))", // Text color on accent bg
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))", // Uses #FFFFFF via globals.css
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors from SnapPrompt
        'muted-gold': '#C5A880',
        'light-neutral': '#F5F5F5',
        'high-contrast': '#1A1A1A',
        'royal-purple': '#8A2BE2',
        'pink-magenta': '#B31375',
        'card-bg': '#FFFFFF',
        'card-bg-alt': '#FDFDFD',
        'dark-footer': '#1D1C1C',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
