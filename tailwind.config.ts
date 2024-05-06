import type { Config } from "tailwindcss";
const {
   default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
   darkMode: ["class"],
   content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
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
         gridTemplateColumns: {
            "socials-cards": "repeat(2, minmax(auto, 1fr))",
         },
         title: ["font-main", "font-bold", "text-3xl", "md:text-7xl"],
         fontFamily: {
            main: ["var(--main-font)", "sans-serif"],
            sans: ["var(--second-font)", "sans-serif"],
         },
         boxShadow: {
            input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
         },
         colors: {
            myyellow: {
               "50": "#fffeea",
               "100": "#fffac5",
               "200": "#fff785",
               "300": "#ffec46",
               "400": "#ffdc1b",
               "500": "#fdbb00",
               "600": "#e29100",
               "700": "#bb6702",
               "800": "#984f08",
               "900": "#7c410b",
               "950": "#482100",
            },
            myred: {
               "50": "#fff2ed",
               "100": "#ffe1d4",
               "200": "#ffbfa8",
               "300": "#ff9370",
               "400": "#ff5b37",
               "500": "#ff3818",
               "600": "#f01706",
               "700": "#c70b07",
               "800": "#9e0e11",
               "900": "#7f0f10",
               "950": "#450508",
            },
            myblue: {
               "50": "#f1f6fe",
               "100": "#e3ecfb",
               "200": "#c0d9f7",
               "300": "#88baf1",
               "400": "#4896e8",
               "500": "#1e6fc5",
               "600": "#135eb6",
               "700": "#104a94",
               "800": "#12417a",
               "900": "#143766",
               "950": "#0e2343",
            },
            black2: "neutral-900",
            white2: "neutral-50",
            black: "hsl(var(--black))",
            white: "hsl(var(--white))",
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
               DEFAULT: "hsl(var(--primary))",
               foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
               DEFAULT: "hsl(var(--secondary))",
               foreground: "hsl(var(--secondary-foreground))",
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
               DEFAULT: "hsl(var(--accent))",
               foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
               DEFAULT: "hsl(var(--popover))",
               foreground: "hsl(var(--popover-foreground))",
            },
            card: {
               DEFAULT: "hsl(var(--card))",
               foreground: "hsl(var(--card-foreground))",
            },
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
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
            aurora: {
               from: { backgroundPosition: "50% 50%, 50% 50%" },
               to: { backgroundPosition: "350% 50%, 350% 50%" },
            },
            scroll: {
               to: {
                  transform: "translate(calc(-50% - 0.5rem))",
               },
            },
         },
         animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            aurora: "aurora 60s linear infinite",
            scroll:
               "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
         },
      },
   },
   plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
   let allColors = flattenColorPalette(theme("colors"));
   let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
   );
   addBase({ ":root": newVars });
}

export default config;
