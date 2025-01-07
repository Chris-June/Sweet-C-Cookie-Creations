/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cookie-cream': '#FFF5E6',     // Soft cream background
        'cookie-brown': '#8B4513',     // Rich chocolate brown
        'cookie-gold': '#FFD700',      // Golden cookie color
        'cookie-caramel': '#D2691E',   // Warm caramel tone
        'cookie-vanilla': '#F5DEB3',   // Vanilla cookie base
        'cookie-choco': '#5D4037',     // Deep chocolate tone
      },
      fontFamily: {
        'serif': ['Baskerville', 'Garamond', 'serif'],
        'script': ['Great Vibes', 'cursive'],
      },
      backgroundImage: {
        'cookie-pattern': 'linear-gradient(135deg, rgba(210, 105, 30, 0.1) 0%, rgba(139, 69, 19, 0.1) 100%)',
      },
      boxShadow: {
        'cookie-elegant': '0 10px 25px rgba(139, 69, 19, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
