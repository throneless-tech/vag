// Chakra UI imports
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box>
      <Container>
        <Grid
          gap={4}
          templateColumns='repeat(5, 1fr)'
        >
          <GridItem colSpan={1}>
            <Text>Logo</Text>
          </GridItem>
          <GridItem colSpan={1}>
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
          </GridItem>
          <GridItem colSpan={3}>
            <Text>
              We’ve designed our website to protect your privacy by [doing something awesome]. 
            </Text>
            <Text>
              We recommend you remove this site from your browser history and in the future use "incognito" or "private" browsing to look up information.
            </Text>
            <Text>
              To clear your browsing history in Google Chrome on Android, iPhone, or iPad, tap the three-dot menu icon {`&gt;`} Settings {`&gt;`} Privacy {`&gt;`} Clear Browsing Data.
            </Text>
          </GridItem>
        </Grid>
        <Divider />
        <Flex>
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