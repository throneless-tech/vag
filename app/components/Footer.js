// Chakra UI imports
import { Image } from '@chakra-ui/next-js';
import {
  Box,
  Center,
  Container,
  HStack,
  Link,
  Show,
  Spacer,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react';

// icon imports
import LogoFooter from '@/public/LogoFooter';
import FacebookIcon from '@/public/icons/social/FacebookIcon';
import InstagramIcon from '@/public/icons/social/InstagramIcon';
import TikTokIcon from '@/public/icons/social/TikTokIcon';
import XTwitterIcon from '@/public/icons/social/XTwitterIcon';

export default function Footer() {
  return (
    <Box bg='brown' color='white'>
      <Container maxW='container.xl' paddingY={6}>
        <Stack
          direction={['column', 'column', 'row']}
          spacing={[2, 6]}
        >
          <Stack
            direction={['column', 'column', 'row-reverse']}
            spacing={4}
          >
            <Box fontSize={14} textAlign={['center', 'left']}>
              <Text as='b' fontSize={18}>Contact us</Text>
              <Text>
                Phone: 505-221-6337
              </Text>
              <br />
              <Text>
                Location:
              </Text>
              <Link
                color='white !important'
                href='https://maps.app.goo.gl/QRVq8VvrcKUqMkUW8'
                target='none'
                textDecoration='underline'
              >
                <Text>
                  8120 La Mirada Pl NE
                </Text>
                <Text>
                  Albuquerque, NM 87109
                </Text>
              </Link>
              <br />
              <Text>
                Mailing address:
              </Text>
              <Text>
                PO Box 25002
              </Text>
              <Text>
                Albuquerque, NM 87125
              </Text>
              <br />
              <Text as='b' fontSize={18}>
                Follow us
              </Text>
              <HStack justifyContent={['center', 'flex-start']}>
                <Link
                  href='https://x.com/valleyabortion'
                >
                  <VisuallyHidden>
                    VAG on X/Twitter
                  </VisuallyHidden>
                  <XTwitterIcon height={3} width={4} />
                </Link>
                <Link
                  href='https://www.facebook.com/people/Valley-Abortion-Group-VAG/100089647541574/'
                >
                  <VisuallyHidden>
                    VAG on Facebook
                  </VisuallyHidden>
                  <FacebookIcon height={4} width={3} />
                </Link>
                <Link
                  href='https://www.instagram.com/valleyabortiongroup/'
                >
                  <VisuallyHidden>
                    VAG on Instagram
                  </VisuallyHidden>
                  <InstagramIcon height={4} width={4} />
                </Link>
                <Link
                  href='https://www.tiktok.com/@valleyabortiongroup 
'
                >
                  <VisuallyHidden>
                    VAG on TikTok
                  </VisuallyHidden>
                  <TikTokIcon height={4} width={3} />
                </Link>
                <Text>@vagclinic</Text>
              </HStack>
            </Box>
            <Center>
              <LogoFooter height={205} width={211} />
            </Center>
          </Stack>
          <Spacer />
          <Box fontSize={14} maxW={['100%', '100%', 500]}>
            <Text>
              VAG Clinic is made possible through the supporters of Valley Abortion Group (VAG), our community, and the commitment and contributions of our start-up team members.
            </Text>
            <Text marginTop={8}>
              We recommend you remove this site from your browser history and, in the future, use “incognito” or “private” browsing to look up information.  You can learn more about clearing your internet browsing history{' '}
              <Link color='white !important' href='https://www.ineedana.com/privacy' textDecoration='underline'>
                here
              </Link>
              .
            </Text>
          </Box>
        </Stack>
        <Box>
          <Box marginTop={4}>
            <Center>
              <HStack spacing={0}>
                <Image
                  alt=''
                  height={4}
                  src='/icons/line@1x.png'
                  width={320}
                />
                <Show above='sm'>
                  <Image
                    alt=''
                    height={4}
                    src='/icons/line@1x.png'
                    width={320}
                  />
                </Show>
              </HStack>
            </Center>
            <Stack
              alignItems='center'
              direction={['column', 'row']}
              justifyContent='center'
              marginTop={2}
            >
              <Text as='b'>
                Call 505-221-6337{' '}
              </Text>
              <Text as='span'>
                for abortion support
              </Text>
            </Stack>
            <Center>
              <HStack spacing={0}>
                <Image
                  alt=''
                  height={4}
                  src='/icons/line@1x.png'
                  width={320}
                />
                <Show above='sm'>
                  <Image
                    alt=''
                    height={4}
                    src='/icons/line@1x.png'
                    width={320}
                  />
                </Show>
              </HStack>
            </Center>
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