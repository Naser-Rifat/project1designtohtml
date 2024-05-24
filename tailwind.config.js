/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xsm: "100%",
          xm: "100%",
          xlg: "100%",
          sm: "100%",
          md: "100%",
          tab: "100%",
          lg: "1024px",
          xl: "1245px",
        },  
        padding: {
          DEFAULT: "1rem",
          xl: "0rem",
        },
      },
      colors: {
        primary: "#6A2DEC",
        secondary: "#9C2EDE",
    
      },
      fontSize: {
        "8xl": "8px",
        xsm: "10px",
        "15xl": "15px",
        "18xl": "18px",
        "22xl": "22px",
        "26xl": "26px",
        "45xl": "45px",
        "80xl": "80px",
      },
      borderRadius: {
        "5px": "5px",
        "15px": "15px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xsm: "320px",
        xm: "390px",
        xlg: "425px",
        sm: "640px",
        md: "768px",
        tab: "992px",
        lg: "1024px",
        xl: "1245px",
      },
     
      gap: {
        "19px": "19px",
      },
      backgroundImage: {
        "hero-background": "url('./assets/hero-slider.jpg')",
      },
      boxShadow: {
        "3xl": "0 0 0 1px rgb(230, 230, 230)",
        card: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      dropShadow: {
        "3xl": "1px 5px 2px rgba(0, 0, 0, 0.25)",
        "2xl": "0px 5px 2px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
}
