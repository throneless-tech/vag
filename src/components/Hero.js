// Chakra UI imports
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
    <Box bg='yellow' paddingBottom={[8, 16]} paddingTop={['170px', 20, 16]}>
      <Container maxW='4xl'>
        <Text
          align={['center', 'right']}
          color='red.200'
          fontSize={[20, 24]}
          fontWeight={700}
          marginBottom={8}
        >
          Abortion is legal in New Mexico.
        </Text>
        <Heading as='h2'>
          <Highlight
            query={['all sta', 'es' ]}
            styles={{ color: 'brown', textDecoration: 'underline'}}
          >
          We provide abortion care in all stages of pregnancy
          </Highlight>
        </Heading>
        <Stack direction={['column', 'row']} gap={6} marginTop={6}>
          <Button
            marginLeft={['auto', 0]}
            marginRight={['auto', 0]}
            width={270}
          >
            Call 555-555-5555
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
    </Box>
  )
}