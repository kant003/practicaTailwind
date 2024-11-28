/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
<<<<<<< Updated upstream
=======
    "./node_modules/flyonui/dist/js/*.js"
<<<<<<< Updated upstream
    
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  ],
  theme: {
    extend: {},
  },
<<<<<<< Updated upstream
  plugins: [],
=======
  plugins: [
    require("flyonui"),
<<<<<<< Updated upstream
    require("flyonui/plugin") // Require only if you want to use FlyonUI JS component
=======
    require("flyonui/plugin")
>>>>>>> Stashed changes
  ],
>>>>>>> Stashed changes
}

