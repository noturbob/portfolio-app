// postcss.config.js - Correct for Tailwind V3
module.exports = {
  plugins: {
    tailwindcss: {}, // Use 'tailwindcss' (the V3 package name)
    autoprefixer: {},
  },
};