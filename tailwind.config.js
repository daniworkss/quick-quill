/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens :{
        "mobile": "375px",
        "tablet": "768px",
        "laptop": "1000px",
        "desktop": "1400px"
       },
       colors:{
        "Blue": '#6366F1',
        'darktextareabg': '#1E293B',
        'VdarkBlue': '#0F172B',
        'darkblue': '#94A3B8'

       }
    },
  },
  plugins: [],
}
