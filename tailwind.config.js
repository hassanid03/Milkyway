/* eslint-disable no-undef */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {},
    colors: {
      gray: colors.gray,
      black: colors.black,
      white: colors.white,
      orange: '#FD6323',
      oranges: '#E25419',
      bblack: '#333333',
      skyblue: '#23D0FD',
      skyblues: '#1EB6DD',
      rred: {
        50: '#fff0f2',
        100: '#ffe3e6',
        200: '#ffcbd3',
        300: '#ffa0b0',
        400: '#ff6b88',
        500: '#fc3762',
        600: '#ea144d',
        700: '#c60a41',
        800: '#a50c3d',
        900: '#8d0e3b',
      },
    },
    fontFamily: {
      black: ['StyreneA-Black'],
      blackItalic: ['StyreneA-BlackItalic'],
      bold: ['StyreneA-Bold'],
      boldItalian: ['StyreneA-BoldItalic'],
      Italic: ['StyreneA-Italic'],
      light: ['StyreneA-Light'],
      lightItalic: ['StyreneA-LightItalic'],
      medium: ['StyreneA-Medium'],
      mediumItalic: ['StyreneA-MediumItalic'],
      regular: ['StyreneA-Regular'],
      thin: ['StyreneA-Thin'],
      thinItalic: ['StyreneA-ThinItalic'],
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
