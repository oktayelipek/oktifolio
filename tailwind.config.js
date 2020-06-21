module.exports = {
  theme: {
    extend: {
      colors: {
				'night-shadz': {
          100: '#F6E9ED',
          200: '#E9C7D3',
          300: '#DBA5B8',
          400: '#C16282',
          500: '#A61E4D',
          600: '#951B45',
          700: '#64122E',
          800: '#4B0E23',
          900: '#320917',
          },
      },
      
      height: theme => ({
      "screen/2": "50vh",
      "screen/3": "calc(100vh / 3)",
      "screen/4": "calc(100vh / 4)",
      "screen/5": "calc(100vh / 5)",
      "porfolioitem": "20rem",
      "porfolioholder": "34rem",
    }),},
  },
  variants: { display: ["responsive", "hover", "focus"] },
}
