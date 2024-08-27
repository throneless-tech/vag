// Chakra UI imports
import { Image } from '@chakra-ui/next-js'
import {
  Box,
  Button,
  Center,
  Flex,
  Spacer,
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
      <Flex direction={['column', 'row']} gap='2px'>
        <Text
          bg='teal.300'
          color='white'
          fontSize={16}
          fontWeight={700}
          lineHeight='28px'
          paddingX={3}
          paddingY={2}
          textAlign={['left', 'right']}
          width='100%'
        >
          Abortion is legal in many states; find out information for your state or a state near you.
        </Text>
        <Spacer />
        <Center>
          <Button height='100%' width={270} paddingY={[2, 0]}>
            <Image
              height={29}
              paddingRight={1}
              src='/icons/icon-swirl@1.png'
              width={33}
            />
            <Text as='span'>
              View access map
            </Text>
          </Button>
        </Center>
      </Flex>
    </Box>
  )
}