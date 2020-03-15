import { Theme } from '@theme-ui/css';
import { base } from '@theme-ui/presets';

const colors = { black: '#040404', white: '#fafafa', rits: '#990000' };

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
    muted: `${colors.black}a0`
  },
  text: {
    paragraph: {
      fontSize: [0, 1, 2, 3],
      margin: 3
    },
    heading: {
      textAlign: 'center',
      margin: 4,
      fontSize: [3, 4, 5, 6]
    }
  },
  buttons: {
    primary: {
      borderRadius: '2px',
      border: 'none',
      color: colors.white,
      paddingY: 3,
      paddingX: 4
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body'
    },
    a: {
      textDecoration: 'underline',
      color: 'primary',
      transition: 'opacity 0.2s',
      '&:hover': {
        opacity: 0.5
      }
    }
  }
};

export default theme;
