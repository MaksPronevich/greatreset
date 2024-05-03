module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        nmr: ['Neue Machina Regular'],
        d3: ['D3'],
      },
    },
    screens: {
      '5xl': '2560px',
      '4xl': '1920px',
      '3xl': '1536px',
      '2xl': '1366px',
      xl: '1280px',
      lg: '1024px',
      md: '768px',
      sm: '320px',
    },
  },
}
