import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textStroke: {
        DEFAULT: '1px white',
        sm: '0.5px white',
        lg: '4px white',
        black: '2px black',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, e, theme }) {
      const textStrokeUtilities = Object.entries(theme('textStroke') || {}).map(([key, value]) => {
        return {
          [`.${e(`text-stroke-${key}`)}`]: {
            '-webkit-text-stroke': value,
          },
        };
      });

      addUtilities(textStrokeUtilities);
    }),
  ],
  variants: {
    extend: {
      textStroke: ['responsive'],
    },
  },
};
export default config;
