import { defineStyleConfig, extendTheme, Heading } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'none',
  },
  variants: {
    solid: {
      bg: 'teal',
      color: 'brown',
      fontSize: 18,
      fontWeight: 500,
      lineHeight: '28px',
    }
  }
})

export const theme = extendTheme({
  colors: {
    brown: '#3F0909',
    teal: '#22A39B',
    white: '#FAEEE0',
  },
  components: {
    Button,
  },
  styles: {
    global: {
      body: {
        color: 'brown',
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