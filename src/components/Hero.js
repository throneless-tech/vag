// Chakra UI imports
import {
  Box,
  Button,
  Container,
  Heading,
  Highlight,
  HStack,
  Text,
} from '@chakra-ui/react'

export default function Hero() {
  return (
    <Box paddingTop={10}>
      <Container>
        <Text align='right'>
          Abortion is legal in New Mexico.
        </Text>
        <Heading as='h2'>
          <Highlight
            query={['all sta', 'es' ]}
            styles={{ textDecoration: 'underline'}}
          >
          We provide abortion care in all stages of pregnancy
          </Highlight>
        </Heading>
        <HStack>
          <Button>
            Call 555-555-5555
          </Button>
          <Text>
            If you're seeking abortion care or assistance, we can help.
          </Text>
        </HStack>
      </Container>
    </Box>
  )
}