'use client'
import { alpha, createTheme, getContrastRatio } from '@mui/material/styles'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const violetBase = '#7F00FF'
const violetMain = alpha(violetBase, 0.7)

const theme = createTheme({
  palette: {
    // primary: {},
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText:
        getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
})

export default theme
