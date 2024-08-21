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
      position='fixed' width='100%'
      zIndex={100}
    >
      <Grid
        templateColumns='repeat(12, 1fr)'
        gap={0}
      >
        <GridItem colSpan={[6, 3]}>
          <VisuallyHidden>
          <Heading as='h1'>
            VAG Clinic
          </Heading>
          </VisuallyHidden>
          <LogoNameIcon height='40px' width='137px' />
        </GridItem>
        <GridItem colSpan={[6, 3]}>
            <Text as='b'>
              Call 555-555-5555
            </Text>
            <Text as='span'>
              {' '}for support
            </Text>
        </GridItem>
        <GridItem colSpan={[12, 4]}>
          <Button>
            Quick Exit
          </Button>
        </GridItem>
      </Grid>
    </Box>
  )
}