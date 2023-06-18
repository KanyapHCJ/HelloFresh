/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    ],
  theme: {
    extend: {
      container:false,
    },
    boxShadow: {
      'innerSwipper' : '0px 3px 3px rgba(228,228,228,1)'
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1520px',
          },
        }
      })
    }
  ],
}

