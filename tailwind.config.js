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
        'bg-hero':'radial-gradient(28.9% 28.9% at 50% 67.59%, #FFFFFF 0%, #A5B5FF 24.34%, #4263FF 88%)',
        
      },
    },
};
