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
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontSize: {
        'sub': '35px',
      },
      dropShadow: {
        'custom': '0px 0px 20px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.box-hover': {
          transition: 'all 0.5s ease-in-out',
          '&:hover': {
            borderColor: '#3b82f6',
            borderWidth: '2px',
          },
        },
      }, ['responsive', 'hover']);
    },
  ],
};
