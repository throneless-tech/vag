// Chakra UI imports
import LogoNameIcon from '@/public/LogoNameIcon'
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Text,
  VisuallyHidden
} from '@chakra-ui/react'

export default function Header() {
  return (
    <Box
      aria-label='Navigation'
      as='nav'
      backgroundColor='#3F0909'
      boxShadow='0px 4px 6px 0px rgba(0, 0, 0, 0.25)'
      position='fixed' width='100%'
      zIndex={100}
    >
      <Grid
        alignItems='center'
        templateColumns='repeat(12, 1fr)'
        gap={0}
      >
        <GridItem colSpan={[7, 4, 2]} paddingX={4} paddingY={2}>
          <VisuallyHidden>
          <Heading as='h1'>
            VAG Clinic
          </Heading>
          </VisuallyHidden>
          <LogoNameIcon height='40px' width='137px' />
        </GridItem>
        <GridItem colSpan={[5, 6, 8]}>
            <Text
              as='b'
              color='white'
              fontSize={[16, 18]}
              fontWeight='700'
            >
              Call 555-555-5555
            </Text>
            <Text
              as='span'
              color='white'
              fontSize={[16, 18]}
              fontWeight={'400'}
            >
              {' '}for support
            </Text>
        </GridItem>
        <GridItem colSpan={[12, 2, 2]}>
          <Button
            as='a'
            href='https://weather.com'
            variant='quick-exit'
            height='100%'
            paddingY={[2, '16px']}
            width='100%'
          >
            Quick Exit
          </Button>
        </GridItem>
      </Grid>
    </Box>
  )
}