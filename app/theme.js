import { defineStyleConfig, extendTheme, Heading } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'none',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '28px',
  },
  variants: {
    brown: {
      bg: 'brown',
      color: 'white',
      _hover: {
        bg: 'red.500',
      }
    },
    'quick-exit': {
      bg: 'teal.100',
      color: 'brown',
      _hover: {
        bg: 'teal.200',
      }
    },
    red: {
      bg: 'red.100',
      color: 'white',
      _hover: {
        bg: 'red.200',
      }
    },
    solid: {
      bg: 'teal.100',
      color: 'brown',
      _hover: {
        bg: 'teal.200',
        color: 'white',
      }
    },
    tan: {
      bg: 'tan.100',
      color: 'brown',
      _hover: {
        bg: 'tan.200',
        color: 'white',
      }
    }
  }
})

export const theme = extendTheme({
  colors: {
    brown: '#3F0909',
    pink: '#F3A39B',
    red: {
      100: '#CB3E00',
      200: '#AD3D0B',
      300: '#992F00',
      400: '#802600',
      500: '#6B2200',
    },
    tan: {
      100: '#C37754',
      200: '#A85E44',
    },
    teal: {
      100: '#22A39B',
      200: '#1D847D',
      300: '#125450',
    },
    white: '#FAEEE0',
    yellow: '#E2AE61',
  },
  components: {
    Button,
  },
  fonts: {
    body: "'Poppins', system-ui, sans-serif",
    heading: 'serif',
  },
  styles: {
    global: {
      a: {
        color: 'brown !important',
        _hover: {
          fontWeight: 500,
        }
      },
      body: {
        color: 'brown',
      },
      h2: {
        fontSize: [48, 72],
        fontWeight: 700,
        lineHeight: ['120%', '123%']
      },
      heading: {
        color: 'brown',
      },
      highlight: {
        color: 'brown',
      },
    }
  }
})