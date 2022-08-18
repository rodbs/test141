import { createTamagui } from '@my/ui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/theme-base'
import { createTokens, createTheme } from 'tamagui'
import { animations } from './animations'

const headingFont = createInterFont({
  size: {
    6: 15,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    6: '400',
    7: '700',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
})

const bodyFont = createInterFont(
  {},
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  }
)

const myTokens = createTokens({
  ...tokens,
  color: {
    ...tokens.color,
    white: '#fff',
    black: '#000',
    redUS: '#D81B22',
    blueUS: '#153E75',
    blueUS2: '#0077B6',
    redUS2: '#d5485d',
  },
})

const lightTheme = createTheme({
  background: '#fff',
  backgroundHover: myTokens.color.gray3Light,
  backgroundPress: myTokens.color.gray4Light,
  backgroundFocus: myTokens.color.gray5Light,
  borderColor: myTokens.color.gray8Light,
  borderColorHover: myTokens.color.gray6Light,
  borderColorFocus: myTokens.color.gray4Light,
  borderColorPress: myTokens.color.gray4Light,

  color: myTokens.color.gray12Light,
  colorHover: myTokens.color.gray11Light,
  colorPress: myTokens.color.gray10Light,
  colorFocus: myTokens.color.gray6Light,
  shadowColor: myTokens.color.grayA5Light,
  shadowColorHover: myTokens.color.grayA6Light,

  primary: myTokens.color.redUS,
  secondary: myTokens.color.blueUS,
})

// // note: we set up a consistent theme type to validate the rest:
type BaseTheme = typeof lightTheme

// // the rest of the themes use BaseTheme
const darkTheme: BaseTheme = {
  background: '#000',
  backgroundHover: myTokens.color.gray2Dark,
  backgroundPress: myTokens.color.gray3Dark,
  backgroundFocus: myTokens.color.gray4Dark,
  borderColor: myTokens.color.gray3Dark,
  borderColorHover: myTokens.color.gray4Dark,
  borderColorFocus: myTokens.color.gray4Light,
  borderColorPress: myTokens.color.gray4Light,

  color: '#ddd',
  colorHover: myTokens.color.gray11Dark,
  colorPress: myTokens.color.gray10Dark,
  colorFocus: myTokens.color.gray6Dark,
  shadowColor: myTokens.color.grayA6Dark,
  shadowColorHover: myTokens.color.grayA7Dark,
  primary: myTokens.color.redUS,
  secondary: myTokens.color.blueUS2,
}

export const config = createTamagui({
  animations,
  defaultTheme: 'light',
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  tokens,
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
})
