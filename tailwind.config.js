/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#003559',
      secondary: '#17C3B2',
      success: '#12A454',
      attention: '#DE0C4B',
      warning: '#FBBF24',
      info: '#1E96FC',
      background: '#EDF2F4',
      shape: '#FFFFFF',
      text: '#969CB2',
      text_dark: '#000000',
    },
  },
  plugins: [],
}
