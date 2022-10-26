import { MantineThemeOverride } from '@mantine/core'
import { darken, lighten } from 'polished'

const PRIMARY_SHADE = 6

function generateShades(mainColor: string, mainColorIndex = PRIMARY_SHADE) {
  const shades: string[] = []

  for (let i = 0; i < 10; i++) {
    if (i === mainColorIndex) {
      shades.push(mainColor)
    }

    if (i < mainColorIndex) {
      shades.push(lighten((mainColorIndex - i) / 11, mainColor))
    }

    if (i > mainColorIndex) {
      shades.push(darken(0.09, shades[i - 1]))
    }
  }

  return shades
}

const colors = {
  brandPrimary: generateShades('#003559'),
  brandSecondary: generateShades('#17C3B2'),
  brandWarning: generateShades('#FBBF24'),
  brandAttention: generateShades('#DE0C4B'),
  brandInfo: generateShades('#1E96FC'),
  brandSuccess: generateShades('#12A454'),
  brandBackground: generateShades('#EDF2F4'),
  brandShape: generateShades('#FFFFFF'),
  brandText: generateShades('#363a4b'),
  brandTextDark: generateShades('#000000'),
}

export default {
  colorScheme: 'light',
  fontFamily: 'Roboto, sans serif',
  colors,
  primaryColor: 'brandSecondary',
  primaryShade: PRIMARY_SHADE,
} as unknown as MantineThemeOverride
