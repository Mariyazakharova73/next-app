declare module '@mui/material/styles' {
  interface Palette {
    custom: Palette['violet']
  }

  interface PaletteOptions {
    custom?: PaletteOptions['violet']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    custom: true
  }
}

// declare module '@mui/material/styles' {
//   interface PaletteColor {
//     darker?: string
//   }

//   interface SimplePaletteColorOptions {
//     darker?: string
//   }
// }
