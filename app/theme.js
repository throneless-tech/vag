import { defineStyleConfig, extendTheme } from "@chakra-ui/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

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
      color: 'white !important',
      _hover: {
        bg: 'red.500',
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

const Heading = defineStyleConfig({
  variants: {
    h3: {
      fontFamily: poppins,
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
      50: '#4AACA6',
      100: '#22A39B',
      200: '#1D847D',
      300: '#125450',
    },
    white: '#FAEEE0',
    yellow: '#E2AE61',
  },
  components: {
    Button,
    Heading,
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
        fontSize: [18, 24],
      },
      h2: {
        fontSize: [48, 72],
        fontWeight: 700,
        lineHeight: ['120%', '123%']
      },
      h3: {
        fontSize: 32,
        fontWeight: 700,
        lineHeight: '120%',
      },
      highlight: {
        color: 'brown',
      },
    }
  }
})