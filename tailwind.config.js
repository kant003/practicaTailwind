/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js" // Requerido si usas componentes JS de FlyonUI
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flyonui"), // Plugin de FlyonUI
    require("flyonui/plugin") // Requerido si usas componentes JS de FlyonUI
  ],
}


