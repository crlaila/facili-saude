/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      colors: {
        'green': '#53F95F',
        'blue': '#4263FF',
        'gray': '#4B4B4B',
        'purple': '#721EFF',
        'white': '#FFFFFF',
        transparent: 'transparent',
      },
    },
};
