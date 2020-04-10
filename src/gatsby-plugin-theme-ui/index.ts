import { Theme } from '@theme-ui/css';
import { base } from '@theme-ui/presets';

const colors = {
  black: '#040404',
  white: '#fafafa',
  rits: '#990000',
  twitter: '#1da1f2',
};

export const theme: Theme = {
  ...base,
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  fontSizes: Array.from({ length: 9 }).map((_, i) => 16 + i * 2),
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: colors.black,
    background: colors.white,
    primary: colors.rits,
    secondary: colors.white,
    muted: `${colors.black}a0`,
    twitter: colors.twitter,
  },
  text: {
    paragraph: {
      fontSize: [0, 1, 2, 3],
      marginY: 3,
    },
    heading: {
      paddingY: 2,
      marginY: '1em',
      fontSize: [3, 4, 5, 6],
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      borderBottomColor: 'primary',
    },
  },
  sizes: { container: '800px' },
  buttons: {
    hero: {
      borderRadius: '2px',
      border: 'none',
      color: colors.white,
      paddingY: 3,
      paddingX: 4,
    },
    share: {
      color: 'white',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      px: 3,
      py: 2,
      border: 0,
      borderRadius: 4,
    },
  },
  layout: {
    container: {
      paddingX: 4,
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
    },
    a: {
      textDecoration: 'underline',
      color: 'primary',
      transition: 'opacity 0.2s',
      '&:hover': {
        opacity: 0.5,
      },
    },
  },
};

export default theme;
