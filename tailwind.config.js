module.exports = {
  content: [
  "./src/**/*.{html,js}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6600',
        'primary-dark': '#293462'
      },
      backgroundImage: {
        'banner-top': "url('assets/img/banner.png')",
        'section-1': "url('assets/img/bg-section1.jpeg')",
        'section-2': "url('assets/img/bg-section2.png')",
        'section1': "url('assets/img/bg-section-1.jpeg')",
        'bg-footer': "url('assets/img/bg-footer.jpg')",
        'bg-bot': "url('assets/img/bg-bot.jpg')"
      },
      height: {
        'height-slide': 'calc(100vh - 228px)',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],

  variants: {
    textDecoration: ['responsive', 'hover', 'focus', 'focus-visible'],
  },
}
