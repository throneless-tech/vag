// Chakra UI imports
import {
  Box,
  Button,
  Center,
  Stack,
  Text,
} from '@chakra-ui/react'

export default function CTA() {
  return (
    <Box bg={['teal.300', 'yellow']} padding={[4, 0]}>
      <Stack direction={['column', 'row']}>
        <Text
          bg='teal.300'
          color='white'
          fontSize={16}
          fontWeight={700}
          lineHeight='28px'
          paddingX={3}
          paddingY={2}
        >
          Abortion is legal in many states; find out information for your state or a state near you.
        </Text>
        <Center>
          <Button width={[196]}>
            View access map
          </Button>
        </Center>
      </Stack>
    </Box>
  )
}