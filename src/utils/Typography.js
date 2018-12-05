import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  googleFonts: [
    { name: 'Nunito', styles: ['400', '700'] },
    { name: 'Montserrat', styles: ['400', '700'] },
  ],
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Nunito', 'serif'],
})

export default typography
