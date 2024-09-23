// Chakra UI imports
import {
  Box,
  Button,
  Flex,
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
      <Flex
        alignItems={['stretch', 'center']}
        direction={['column', 'row']}
        gap={2}
      >
        <Box width='100vw'>
          <HStack
            justifyContent={['space-between', 'flex-start']}
            paddingX={2}
            paddingTop={[2, 0]}
            spacing={[2, 6]}
          >
            <VisuallyHidden>
              <Heading as='h1'>
                VAG Clinic
              </Heading>
            </VisuallyHidden>
            <LogoNameIcon height='40px' width='137px' />
            <Box maxW={[160, '100%']}>
              <Text
                as='b'
                color='white'
                fontSize={[16, 18]}
                fontWeight='700'
              >
                Call 505-221-6337
              </Text>
              <Text
                as='span'
                color='white'
                fontSize={[16, 18]}
                fontWeight={'400'}
              >
                {' '}for support
              </Text>
            </Box>
          </HStack>
        </Box>
        <Spacer />
        <Box>
          <Button
            as='a'
            href='https://weather.com'
            height='100%'
            paddingY={[2, '16px']}
            variant='solid'
            width={['100%', 162]}
          >
            <Text
              as='span'
              className={header.breatheContainer}
              paddingRight={7}
              // sx={{
              //   marginLeft: ['-80px', '-30px', '-40px']
              // }}
            >
              Quick Exit
            </Text>
            <Image
              alt=''
              className={header.breathe}
              height={31}
              src='/icons/icon-flower@1.png'
              sx={{
                right: ['34%', '10%']
              }}
              width={35}
            />
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}