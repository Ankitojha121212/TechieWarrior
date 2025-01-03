/** @type {import('tailwindcss').Config} */
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
      },
    },
  },
  plugins: [],
};

// not using that now

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         primary: "#ff0000", // Red
//         secondary: "#000000", // Black
//         background: "#ffffff", // White
//         accent: "#f5f5f5", // Light Gray
//       },
//     },
//   },
// };
