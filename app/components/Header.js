// Chakra UI imports
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Spacer,
  Text,
  VisuallyHidden
} from '@chakra-ui/react';

// icons
import LogoNameIcon from '@/public/LogoNameIcon';
import { Image } from '@chakra-ui/next-js';

// extra styles
import header from '../header.module.css';

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
        <GridItem colSpan={[7, 4, 2]} paddingX={4} paddingY={2} gap={4}>
          <VisuallyHidden>
            <Heading as='h1'>
              VAG Clinic
            </Heading>
          </VisuallyHidden>
          <LogoNameIcon height='40px' width='137px' />
        </GridItem>
        <GridItem colSpan={[5, 5, 8]}>
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
        <GridItem colSpan={[12, 3, 2]}>
          <Button
            as='a'
            href='https://weather.com'
            height='100%'
            paddingY={[2, '16px']}
            variant='solid'
            width='100%'
          >
            <Text
              as='span'
              className={header.breatheContainer}
              sx={{
                marginLeft: ['-60px', '-30px', '-40px']
              }}
            >
              Quick Exit
            </Text>
            <Image
              className={header.breathe}
              height={31}
              marginLeft={2}
              src='/icons/icon-flower@1.png'
              sx={{
                right: ['34%', '10%']
              }}
              width={35}
            />
          </Button>
        </GridItem>
      </Grid>
    </Box>
  )
}