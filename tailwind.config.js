module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "50%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "50%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
      },
      animation: {
        "slide-up-03-in": "slide-up 0.3s ease-in",
        "slide-up-03-out": "slide-up 0.3s ease-out",
        "slide-left-06-out": "slide-left 0.6s ease-out",
        "slide-up-1-in": "slide-up 1s ease-in",
        "slide-up-1-out": "slide-up 1s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
