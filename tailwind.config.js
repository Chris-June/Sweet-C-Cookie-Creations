/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tea-rose': '#F4D03F',     // Soft golden yellow
        'tea-lavender': '#D2B4DE', // Soft lavender
        'tea-sage': '#A9DFBF',     // Soft sage green
        'tea-cream': '#FDF2E9',    // Warm cream background
        'tea-brown': '#6E2C00',    // Rich tea brown
      },
      fontFamily: {
        'serif': ['Baskerville', 'Garamond', 'serif'],
        'script': ['Great Vibes', 'cursive'],
      },
      backgroundImage: {
        'tea-pattern': 'linear-gradient(135deg, rgba(244, 208, 63, 0.1) 0%, rgba(210, 180, 222, 0.1) 100%)',
      },
      boxShadow: {
        'tea-elegant': '0 10px 25px rgba(110, 44, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
