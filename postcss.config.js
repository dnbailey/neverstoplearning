module.exports = {
  plugins: [
    require(`tailwindcss`)(`./styles/tailwind.config.js`),
    require(`autoprefixer`),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}