// Chakra UI imports
import {
  Box,
  Button,
  HStack,
  Text,
} from '@chakra-ui/react'

export default function CTA() {
  return (
    <Box>
      <HStack>
        <Text>
          Abortion is legal in many states; find out information for your state or a state near you.
        </Text>
        <Button>
          View access map
        </Button>
      </HStack>
    </Box>
  )
}