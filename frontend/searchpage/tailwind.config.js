/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-bg-color': '#2F303A',
        'cardcolor':'#3F3D56',
        
      },
      fontFamily: {
        custom: ['YourFontFamily', 'Poppins'],
      },
    },
  },
  plugins: [],
};
