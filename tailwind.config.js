/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js',],
  theme: {
    extend: {

      colors: {
        'green-600': '#079D46' , 
       
      }
    },

    active: {
      on: "active rounded-t-lg border-b-2 border-green-600 text-green-600 dark:border-green-500 dark:text-green-500",
      off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
    },
 
  },
  plugins: [
    require('flowbite/plugin'),
     ],
}

