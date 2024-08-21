// Chakra UI imports
import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box>
      <Container>
        <Flex direction={['column', 'row']}>
          <Stack direction={['column', 'row-reverse']}>
            <Box>
              <Text as='b'>Contact us</Text>
              <Text>VAG Clinic</Text>
              <Text>
                Albuquerque, NM 87125
              </Text>
              <br />
              <Text>
                Toll-free: 800-555-5555
              </Text>
              <Text>
                Local: 555-555-5555
              </Text>
              <br />
              <Text as='b'>
                Follow us
              </Text>
              <HStack>
                <Text>@valleyabortiongroup</Text>
              </HStack>
            </Box>
            <Text>Logo</Text>
          </Stack>
          <Spacer />
          <Box>
            <Text>
              We’ve designed our website to protect your privacy by [doing something awesome].
            </Text>
            <Text>
              We recommend you remove this site from your browser history and in the future use "incognito" or "private" browsing to look up information.
            </Text>
            <Text>
              To clear your browsing history in Google Chrome on Android, iPhone, or iPad, tap the three-dot menu icon {`&gt;`} Settings {`&gt;`} Privacy {`&gt;`} Clear Browsing Data.
            </Text>
          </Box>
        </Flex>
        <Divider />
        <Flex direction={['column', 'row']}>
          <Text as='b'>
            Call 555-555-5555 for abortion support
          </Text>
          <Spacer />
          <Text>
            Website built in collaboration with Throneless Tech and Design Choice
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}