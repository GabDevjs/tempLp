
module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'body-sm': '14px',
        'body-md': '16px',
        'body-lg': '18px',
      },
      colors: {
        'primary-dark': '#273746',
        'backGround': '#BFDEEA',
        'backGround-dark': '#8FA6AF',
        'primary-blue': '#007aaa',
        'secondy-blue': '#006B95',
        'primary-red': '#EF4444',
        'secondy-red': '#D13C3C',
        'primary-green': '#22C55E',
        'secondy-green': '#1EAC52',
        'primary-yellow': '#EAB308',
        'secondy-yellow': '#CD9D07',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}