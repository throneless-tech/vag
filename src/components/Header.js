// Chakra UI imports
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text
} from '@chakra-ui/react'

export default function Header() {
  return (
    <Box as='nav' aria-label='Navigation' position='fixed' width='100%' zIndex={100} >
      <Flex padding={2}>
        <Flex>
          <Heading as='h1'>
            VAG Clinic
          </Heading>
          <Box>
            <Text as='b'>
              Call 555-555-5555
            </Text>
            <Text as='span'>
              {' '}for support
            </Text>
          </Box>
        </Flex>
        <Spacer />
        <Button>
          Quick Exit
        </Button>
      </Flex>
    </Box>
  )
}