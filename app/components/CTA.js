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
    <Box
      bg={['teal.300', 'yellow']}
      padding={[4, 0]}
      position='relative'
      zIndex={1}
    >
      <Stack direction={['column', 'row']}>
        <Text
          bg='teal.300'
          color='white'
          fontSize={16}
          fontWeight={700}
          lineHeight='28px'
          minW={['100%', 400, 750, 900 ]}
          paddingX={3}
          paddingY={2}
          width='100%'
        >
          Abortion is legal in many states; find out information for your state or a state near you.
        </Text>
        <Center width='100%'>
          <Button height='100%' width='100%'>
            View access map
          </Button>
        </Center>
      </Stack>
    </Box>
  )
}