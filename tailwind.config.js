module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      animation: {
        "fade": "fadeInDown 5s ease-in-out infinite",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.primary"), color: theme("colors.white") },
          "50%": { backgroundColor: theme("colors.transparent"), color: theme("colors.secondary") },
          "100%": { backgroundColor: theme("colors.primary"), color: theme("colors.white") },
        },
      }),
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4475F2",
          secondary: "#2538BF",
          accent: "#3d4451",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}