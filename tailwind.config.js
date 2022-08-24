module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
      },
      colors: {
        "farmacoop-blue": "var(--farmacoop-blue)",
        "farmacoop-light-blue": "var(--farmacoop-light-blue)",
        "farmacoop-dark-blue": "var(--farmacoop-dark-blue)",
        "transp-white": "var(--transparent-white)",
        "orange-red": "var(--orange-red)",
      },
      backgroundImage: {
        "history-4": "url('../img/history/history-4.jpg')",
        "history-3": "url('../img/history/history-3.jpg')",
        "history-2": "url('../img/history/history-2.jpg')",
        "history-1": "url('../img/history/history-1.jpg')",
        "product-7": "url('../img/products/test-4.jpg')",
        "product-6": "url('../img/products/test-2.jpg')",
        "product-5": "url('../img/products/alcohol-gel-5.jpg')",
        "product-4": "url('../img/products/alcohol-gel.jpg')",
        "product-3": "url('../img/products/alcohol-5.jpg')",
        "product-2": "url('../img/products/alcohol.jpg')",
        "product-1": "url('../img/aqualane-otonio.jpg')",
      },
      animation: {
        "show-farmacoop": "show-logo 1s ease-in-out",
      },
      keyframes: {
        "show-logo": {
          "0%": { transform: "translate(15%,0)", opacity: 0 },
          "100%": { transform: "translate(0,0)", opacity: 100 },
        },
      },
    },
  },
  plugins: [],
};
