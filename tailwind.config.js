// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path according to your project structure
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 2px 7px 0px rgba(49, 50, 169, 0.36)', // Custom shadow
        'custom2': '5px 10px 80px 0px rgba(0, 0, 0, 0.05)', // #0000000D in rgba
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
