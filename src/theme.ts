import { extendTheme } from '@chakra-ui/react';

export const customTheme = {
  fonts: {
    heading: 'var(--font-roboto)',
    body: 'var(--font-roboto)',
  },
  colors: {
    gray: {
      900: '#0A0A0A',
      800: '#161616',
      700: '#1E1E1E',
      400: '#303030',
      100: '#DDDDDD',
    },
    purple: {
      400: '#8979B6',
    },
  },
  styles: {
    global: {
      html: {
        scrollbarWidth: 'thin',
        scrollbarColor: '#8979B6 #0A0A0A',
      },
      body: {
        bg: 'gray.900',
        color: 'gray.100',
        overflowX: 'hidden',
      },
    },
  },
};

export const theme = extendTheme(customTheme);
