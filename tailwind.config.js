/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  variants: {
    space: ['responsive']
  },
  theme: {
    extend: {
      backgroundImage: {
        'site-gradient': 'linear-gradient(000000, #7ED957)'
      },
      screens: {
        'xxs': '400px',
        'xs': '475px',
        'minism': '575px',
        'midmd': '896px',
        'short': { 'raw': '(max-height: 750px)'},
        // 'tall': { 'raw': '(min-height: 800px)' },
      },
      colors: {
        'neon': '#7ED957',
      },
      boxShadow: {
        '4xl': 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
      },
      dropShadow: {
        '3xl': '10px 10px 8px #595959',
        'grey': '10px 10px 8px #A6A6A6',
      },
      spacing: {
        '1/2': '50%',
        "300px": "300px",
      },
      margin: {
        'margLeft': 'calc((12rem) * -1)'
      }
    },
  },
  plugins: [],
}
