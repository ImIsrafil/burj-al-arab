module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { 'max': '425px' },
        tablet: { 'max': '768px' },
        laptop: { 'max': '1024px' },
        desktop: { 'max': '1440px' }

      }
    },
  },
  plugins: [],
}
