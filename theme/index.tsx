import { extendTheme, useColorModeValue } from '@chakra-ui/react';
import { mode, StyleFunctionProps,  } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Work Sans, system-ui, sans-serif',
  },
  colors: {
    brand: {
      // pink
      1: '#ff69B4', 
      // neon blue
      2: '#00ffff'
    },
    hover: {
      1: '#1a0714'
    }
  },
  shadows: {
    largeSoft: 'rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;',
  },
  styles: {
    global: {
      'html, #__next': {
        height: '100%',
      },
      '#__next': {
        display: 'flex',
        flexDirection: 'column',
      },
      '.body': {
        // todo check how to do this without breaking the site
        // height: '100%', // Push footer to bottom
        overflowY: 'scroll', // Always show scrollbar to avoid flickering
      },
      html: {
        scrollBehavior: 'smooth',
      },
      '#nprogress': {
        pointerEvents: 'none',
      },
      '#nprogress .bar': (props: StyleFunctionProps) => ({
        background: mode('brand.1', 'brand.2')(props),
        color: mode('brand.1', 'brand.2')(props),
        position: 'fixed',
        zIndex: '1031',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
      }),
    },
  },
});
