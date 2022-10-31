// tailwind.config.js
module.exports = {
    content: [
      "./src/screens/**/*.{js,ts,jsx,tsx}",
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [
        // ...
        require('tailwind-scrollbar'),
    ],
    variants: {
        // ...
        scrollbar: ['dark']
    }    
    // ...
  };