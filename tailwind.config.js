/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#FFECF0',
        'Neutral-500': '#737373',
        'background': '#FFFBFF',
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    // themes: ["light", "dark"],
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          'primary': '#A13862',
          'primary-content': '#FFD9E2',
          'background': '#FFFBFF',
            },
      },
    ],
  },
}

