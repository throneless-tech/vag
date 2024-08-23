// Chakra UI imports
import LogoFooter from '@/public/LogoFooter'
import { Link } from '@chakra-ui/next-js'
import {
  Box,
  Center,
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
    <Box bg='brown' color='white'>
      <Container paddingY={6}>
        <Stack direction={['column', 'row']} spacing={6}>
          <Stack direction={['column', 'row-reverse']} spacing={4} >
            <Box fontSize={14} textAlign={['center', 'right']}>
              <Text as='b' fontSize={18}>Contact us</Text>
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
              <Text as='b' fontSize={18}>
                Follow us
              </Text>
              <HStack justifyContent='center'>
                <Text>@valleyabortiongroup</Text>
              </HStack>
            </Box>
            <Center marginTop={6}>
              <LogoFooter height={245} width={211} />
            </Center>
          </Stack>
          <Spacer />
          <Box fontSize={14} marginTop={[0, 6]}>
            <Text>
              We’ve designed our website to protect your privacy by [doing something awesome].
            </Text>
            <Text marginTop={2}>
              We recommend you remove this site from your browser history and in the future use "incognito" or "private" browsing to look up information.
            </Text>
            <Text marginTop={2}>
              To clear your browsing history in Google Chrome on Android, iPhone, or iPad, tap the three-dot menu icon &gt; Settings &gt; Privacy &gt; Clear Browsing Data.
            </Text>
          </Box>
        </Stack>
        <Box>
          <Box marginTop={4}>
            <Divider />
            <Stack alignItems='center' direction={['column', 'row']} justifyContent='center'>
              <Text as='b'>
                Call 555-555-5555{' '}
              </Text>
              <Text as='span'>
                for abortion support
              </Text>
            </Stack>
            <Divider />
          </Box>
          <Spacer />
          <Text
            color='tan.100'
            fontSize={12}
            marginTop={4}
            textAlign='center'
          >
            Website built in collaboration with{' '}
            <Link
              color='tan.100 !important'
              href='https://throneless.tech'
              textDecoration='underline'
            >
            Throneless Tech
            </Link>{' '}and{' '}
            <Link
              color='tan.100 !important'
              href='https://www.designchoice.studio/'
              textDecoration='underline'
            >
            Design Choice
            </Link>
          </Text>
        </Box>
      </Container>
    </Box>
  )
}