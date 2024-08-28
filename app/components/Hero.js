// Chakra UI imports
import { Image } from '@chakra-ui/next-js'
import {
  Box,
  Button,
  Container,
  Heading,
  Highlight,
  Stack,
  Text,
} from '@chakra-ui/react'

export default function Hero() {
  return (
    <Box
      bg='yellow'
      position='relative'
    >
      <Container
        maxW='container.xl'
        paddingBottom={[140, 160, 120]}
        paddingTop={['170px', 20, 16]}
        position='relative'
        zIndex={1}
      >
        <Text
          align={['center', 'right']}
          as='div'
          color='red.200'
          fontSize={[20, 24]}
          fontWeight={700}
          marginBottom={8}
        >
          Abortion is legal in New Mexico.
          <Image
            display='block'
            height={7}
            marginLeft='auto'
            marginRight={['auto', 0]}
            src='/section-01-hero/line-zigzag@1x.png'
            width={240}
          />
        </Text>
        <Heading as='h2' variant='h2'>
          <Highlight
            query={['all sta', 'es']}
            styles={{
              color: 'brown',
              position: 'relative',
              _after: {
                backgroundImage: 'url("/icons/line@1x.png")',
                bottom: ['-0.3em', '-0.1em'],
                content: '""',
                height: 5,
                left: 0,
                position: 'absolute',
                width: '100%',
              }
            }}
          >
            We provide abortion care in all stages of pregnancy
          </Highlight>
        </Heading>
        <Stack
          alignItems='center'
          direction={['column', 'row']}
          gap={6}
          marginTop={6}
        >
          <Button
            as='a'
            href='tel:+15052216337'
            marginLeft={['auto', 0]}
            marginRight={['auto', 0]}
            maxWidth={270}
          >
            <Image
              height={26}
              src='/icons/icon-rainbow@1.png'
              paddingRight={1}
              sx={{
                width: '36px',
              }}
              width={36}
            />
            <Text as='span'>
              Call 505-221-6337
            </Text>
          </Button>
          <Text
            fontSize={24}
            fontWeight={700}
            lineHeight='150%'
          >
            If you&apos;re seeking abortion care or assistance, we can help.
          </Text>
        </Stack>
      </Container>
      <Box
        marginLeft='auto'
        marginRight={0}
        position='absolute'
        sx={{
          bottom: 0,
          right: 0,
          transform: 'translateX(8%) translateY(10%)',
          zIndex: 0,
        }}
        // width={['86vw', '74vw', '38vw']}
      >
        <Image
          height={340}
          src='/section-01-hero/mountains@1x.png'
          sx={{
            height: [200, 260, 340],
            width: [420, 520, 640]
          }}
          width={840}
        />
      </Box>
    </Box>
  )
}