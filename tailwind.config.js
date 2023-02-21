module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {  
      fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
  },
  },
  daisyui: {
    themes: ["dark", "halloween", "forest",  "black", "luxury", "dracula", "business", "lemonade", "night", "coffee"],
  },
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  plugins: [require("daisyui")],
}