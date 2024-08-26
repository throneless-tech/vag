// Chakra UI imports
import { Image } from '@chakra-ui/next-js'
import {
  Box,
  Button,
  Center,
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
        maxW='3xl'
        paddingBottom={['80px', 160, 120]}
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
        <Stack direction={['column', 'row']} gap={6} marginTop={6}>
          <Button
            marginLeft={['auto', 0]}
            marginRight={['auto', 0]}
            maxWidth={270}
          >
            <Image
              height={26}
              src='/icons/icon-rainbow@1.png'
              paddingRight={1}
              width={36}
            />
            <Text as='span'>
              Call 555-555-5555
            </Text>
          </Button>
          <Text
            fontSize={24}
            fontWeight={700}
            lineHeight='150%'
            maxWidth={515}
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
          transform: 'translateX(10%) translateY(10%)',
          zIndex: 0,
        }}
        width={['86vw', '74vw', '60vw']}
      >
        <Image
          height={340}
          src='/section-01-hero/mountains@1x.png'
          sx={{
            height: [200, 260, 340],
            width: [420, 560, 840]
          }}
          width={840}
        />
      </Box>
    </Box>
  )
}