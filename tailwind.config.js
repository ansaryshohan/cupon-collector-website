/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "hero-img":"url('./src/assets/bob-canning-r53rNKb_7s8-unsplash.jpg')"
      },
      colors:{
        "primary-color":"#012540",
        "secondary-color":"#33628F"
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

