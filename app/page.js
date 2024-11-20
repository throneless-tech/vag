'use client'

// Chakra UI imports
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Hide,
  Highlight,
  HStack,
  List,
  ListItem,
  Show,
  Spacer,
  Stack,
  Text
} from '@chakra-ui/react'
import { Image, Link } from '@chakra-ui/next-js'

// components
import CardServices from '@/app/components/CardServices';
import CardResources from '@/app/components/CardResources';
import CTA from "@/app/components/CTA";
import Footer from '@/app/components/Footer';
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";

// styles
import styles from "./page.module.css";

// icons
import MapIcon from '@/public/icons/MapIcon';

export default function Home() {
  return (
    <Box overflowX='hidden'>
      <Header />
      {/* <main className={styles.main}> */}
      <main>
        <Hero />
        <Box bg='red.500' position='relative'>
          <Box
            marginLeft='auto'
            marginRight={0}
            position='absolute'
            sx={{
              right: 0,
              top: 0,
              transform: 'translateX(30%)',
              zIndex: 0,
            }}
          >
            <Image
              alt=''
              height={434}
              src='/section-02-appt/flower@1x.png'
              sx={{
                height: [200, 260, 374],
                width: [200, 260, 374]
              }}
              width={374}
            />
          </Box>
          <Container
            color='white'
            maxW={['container.xs', 'container.sm', 'container.md', 'container.lg', 'container.xl']}
            paddingY={12}
          >
            <Heading as='h2' variant='h2'>
              Set up an Appointment
            </Heading>
            <Text paddingTop={4} maxWidth={[400, 600, 780, 780, 1200]}>
              To maintain your privacy, we are only scheduling appointments by phone.
              <br />
              <Text as='b' paddingTop={2}>
                Call us at 505-221-6337, 8:30 a.m. to 4:30 p.m. (MT), Monday through Friday.
              </Text>
            </Text>
            <Center marginTop={6}>
              <Hide above='sm'>
                <Image
                  alt=''
                  height={5}
                  src='/icons/line@1x.png'
                  width={300}
                />
              </Hide>
            </Center>
            <Heading as='h3' paddingTop={8} variant='h3'>
              What to know when you call
            </Heading>
            <List color='brown' className={styles.list}>
              <ListItem
                bg='pink'
                className={styles.listItem}
                marginLeft={[0, 0, 16]}
                marginTop={[20, 20, 8]}
                paddingX={[6, 8, 12]}
                paddingY={[7, 6, 2]}
                sx={{
                  position: 'relative',
                  _before: {
                    backgroundImage: 'url(/section-02-appt/dot@1x.png)',
                    backgroundRepeat: 'no-repeat',
                    content: '""',
                    height: 95,
                    left: ['50%', '50%', '-9%', '-7%'],
                    paddingLeft: 10,
                    position: 'absolute',
                    top: ['-22%', '-32%', '50%'],
                    transform: ['translateX(-50%) translateY(-16%)', 'translateX(-50%)', 'translateY(-50%)'],
                    width: 106,
                  }
                }}
              >
                <Text>
                  What was the first day of your last period, or how many weeks pregnant are you according to an ultrasound (if you&apos;ve had one)?
                </Text>
                <Text marginTop={3}>
                  Need Help? Try this{' '}
                  <Link href='https://www.perinatology.com/calculators2.htm' textDecoration='underline' _hover={{ color: 'blue.500' }}>
                    Pregnancy Calculator
                  </Link>
                  .
                </Text>
              </ListItem>
              <ListItem
                bg='pink'
                className={styles.listItem}
                marginLeft={[0, 0, 16]}
                marginTop={[20, 20, 8]}
                paddingX={[6, 8, 12]}
                paddingY={[7, 7, 2]}
                sx={{
                  position: 'relative',
                  _before: {
                    backgroundImage: 'url(/section-02-appt/dot@1x.png)',
                    backgroundRepeat: 'no-repeat',
                    content: '""',
                    height: 95,
                    left: ['50%', '50%', '-9%', '-7%'],
                    paddingLeft: 9,
                    position: 'absolute',
                    top: ['-44%', '-46%', '50%'],
                    transform: ['translateX(-50%)', 'translateX(-50%)', 'translateY(-50%)'],
                    width: 106,
                  }
                }}
              >
                Do you need help funding your care?  VAG can help coordinate funds for your abortion.
              </ListItem>
              <ListItem
                bg='pink'
                className={styles.listItem}
                marginLeft={[0, 0, 16]}
                marginTop={[20, 20, 8]}
                paddingX={[6, 8, 12]}
                paddingY={[8, 8, 2]}
                sx={{
                  position: 'relative',
                  _before: {
                    backgroundImage: 'url(/section-02-appt/dot@1x.png)',
                    backgroundRepeat: 'no-repeat',
                    content: '""',
                    height: 95,
                    left: ['50%', '50%', '-9%', '-7%'],
                    paddingLeft: 9,
                    position: 'absolute',
                    top: ['-52%', '-58%', '50%'],
                    transform: ['translateX(-50%)', 'translateX(-50%)', 'translateY(-50%)'],
                    width: 106,
                  }
                }}
              >
                Do you need help with travel?  VAG can help coordinate travel for your abortion.
              </ListItem>
            </List>
            <Center marginTop={6}>
              <Image
                alt=''
                height={5}
                src='/icons/line@1x.png'
                width={300}
              />
              <Show above='sm'>
                <Image
                  alt=''
                  height={5}
                  marginLeft='-1px'
                  src='/icons/line@1x.png'
                  width={300}
                />
              </Show>
            </Center>
            <Stack
              alignItems={['center', 'center', 'stretch']}
              direction={['column', 'row']}
              gap={3}
              justifyContent='center'
              marginTop={8}
            >
              <Button
                as='a'
                href='tel:+15052216337'
                marginLeft={['auto', 0]}
                marginRight={['auto', 0]}
                minW={274}
                variant='tan'
                width={274}
              >
                <Image
                  alt=''
                  height={26}
                  paddingRight={1}
                  src='/icons/icon-rainbow@1.png'
                  sx={{
                    width: '36px',
                  }}
                  width={36}
                />
                <Text as='span'>
                  Call 505-221-6337
                </Text>
              </Button>
              <Text as='b' marginTop={2} textAlign='center'>
                8:30 a.m. - 4:30 p.m. (MT), Monday - Friday
              </Text>
            </Stack>
          </Container>
        </Box>
        <Box>
          <Container
            maxW={['container.xs', 'container.sm', 'container.md', 'container.lg', 'container.xl']}
            paddingY={12}
          >
            <Heading as='h2' color='teal.200' variant='h2'>
              Should you come to VAG Clinic?
            </Heading>
            <Heading
              as='h3'
              color='red.100'
              fontWeight={500}
              lineHeight={1.4}
              marginTop={2}
              variant='h3'
            >
              <Highlight
                query={['Anyone who desires an abortion']}
                styles={{
                  color: 'red.100',
                  fontWeight: 500,
                  position: 'relative',
                  whiteSpace: 'wrap',
                  _after: {
                    backgroundImage: 'url("/icons/line-teal@1x.png")',
                    bottom: ['-0.3em', '-0.3em'],
                    content: '""',
                    height: 5,
                    left: 0,
                    lineHeight: 1.4,
                    position: 'absolute',
                    width: '100%',
                    wordBreak: 'break-all'
                  }
                }}
              >
                Anyone who desires an abortion should call us. Period.
              </Highlight>
            </Heading>
            <Stack
              alignItems='center'
              direction={['column', 'row']}
              gap={6}
              justifyContent='space-between'
              marginTop={6}
            >
              <Box>
                <Text marginTop={4} maxW='2xl'>
                  We provide care across all trimesters and encourage you to call us.  If we are not able to schedule your visit with us, we will share options with you so that you get the care you need.
                </Text>
              </Box>
              <Image
                alt=''
                height={196}
                src='/section-03-come-provide/jug@1x.png'
                width={172}
              />
            </Stack>
            <Grid
              alignItems='center'
              justifyContent='flex-start'
              templateColumns='repeat(10, 1fr)'
            >
              <GridItem colSpan={[0, 0, 7]}>
                <Show above='md'>
                  <HStack spacing={0}>
                    <Image
                      alt=''
                      height={4}
                      src='/icons/line-teal@1x.png'
                      width={320}
                    />
                    <Image
                      alt=''
                      height={4}
                      src='/icons/line-teal@1x.png'
                      width={320}
                    />
                    <Show above='xl'>
                      <Image
                        alt=''
                        height={4}
                        src='/icons/line-teal@1x.png'
                        width={320}
                      />
                    </Show>
                    <Show above='2xl'>
                      <Image
                        alt=''
                        height={10}
                        marginLeft='-30px'
                        paddingTop={2}
                        src='/icons/line-teal-short.png'
                        width={160}
                      />
                    </Show>
                  </HStack>
                </Show>
              </GridItem>
              <GridItem colSpan={[10, 10, 3]}>
                <Heading
                  as='h2'
                  color='teal.200'
                  marginTop={[10, 6]}
                  textAlign={['left', 'left', 'center', 'right']}
                >
                  We provide
                </Heading>
              </GridItem>
            </Grid>
            <Flex
              direction='row'
              gap={4}
              justifyContent='center'
              marginTop={4}
              wrap='wrap'
            >
              <CardServices
                body='Responsive, survivor-centered care - from low-intervention methods to surgical procedures'
                height={100}
                icon='/section-03-come-provide/moon@1x.png'
                title='In-clinic Abortions'
                width={100}
              />
              <CardServices
                body='Honoring spiritual well-being and healing practices when receiving care'
                height={100}
                icon='/section-03-come-provide/water@1x.png'
                title='Spiritual Services'
                width={210}
              />
              <CardServices
                body='Nonjudgmental and compassionate care that holds space for emotional support'
                height={100}
                icon='/section-03-come-provide/eye@1x.png'
                title='Grief Support'
                width={100}
              />
            </Flex>
          </Container>
        </Box>
        <Box
          bg='pink'
          backgroundImage='url("/section-04-resources/pattern@1x.jpg")'
          backgroundRepeat='repeat'
          position='relative'
          zIndex={1}
        >
          <Container
            maxW={['container.xs', 'container.sm', 'container.md', 'container.lg', 'container.xl']}
            paddingY={12}
          >
            <Heading as='h2' variant='h2'>
              Abortion Resources
            </Heading>
            <Flex
              direction='row'
              gap={4}
              justifyContent='center'
              marginTop={4}
              wrap='wrap'
            >
              <CardResources
                body='I Need An A is a comprehensive and personalized resource for abortion seekers that includes details to consider when arranging an abortion.'
                height={81}
                href='https://www.ineedana.com/'
                icon='/section-04-resources/logo-ineeda@1x.png'
                linkText='Go to ineedana.com'
                title='Find abortion support near you'
                width={196}
              />
              <CardResources
                body='The National Network of Abortion Funds is a network of 100 independent abortion funds that work with abortion seekers to help cover abortion costs and arrange for logistical support.'
                height={175}
                href='https://abortionfunds.org/find-a-fund/'
                icon='/section-04-resources/logo-nnaf@1x.png'
                linkText='Go to NNAF'
                title='Find an abortion fund'
                width={175}
              />
              <CardResources
                body='Repro Legal Helpline provides free and confidential services including answering legal questions about abortion.'
                height={130}
                href='https://www.reprolegalhelpline.org/'
                icon='/section-04-resources/logo-repro-legal-helpline.png'
                linkText='Go to Repro Legal Helpline'
                title='Find legal support'
                width={175}
              />
            </Flex>
          </Container>
        </Box>
        <CTA />
        <Box position='relative'>
          <Box
            marginLeft='auto'
            marginRight={0}
            position='absolute'
            sx={{
              right: 0,
              top: 0,
              transform: 'translateX(50%) translateY(-30%)',
              zIndex: 0,
            }}
          >
            <Image
              alt=''
              height={434}
              src='/section-05-about/sun@1x.png'
              sx={{
                height: [170, 260, 284],
                width: [192, 280, 320]
              }}
              width={374}
            />
          </Box>
          <Show above='md'>
            <Box
              marginLeft='auto'
              marginRight={0}
              position='absolute'
              sx={{
                bottom: [0, 0, '-18%', '-22%'],
                left: ['50%', '50%', '50%', '70%'],
                transform: 'translateX(68%) translateY(-26%)',
                zIndex: 0,
              }}
            >
              <Image
                alt=''
                height={434}
                src='/section-05-about/cactus@1x.png'
                sx={{
                  height: [150, 250, 312],
                  width: [100, 200, 268]
                }}
                width={374}
              />
            </Box>
          </Show>
          <Container
            maxW={['container.xs', 'container.sm', 'container.md', 'container.lg', 'container.xl']}
            paddingY={12}
          >
            <Stack direction={['column', 'row']}>
              <Box>
                <Heading as='h2' variant='h2'>
                  Who is VAG?
                </Heading>
                <Text marginTop={4} maxWidth={['100%', '100%', 580, 780]}>
                  You know us as Valley Abortion Group or VAG. Our name is changing, and you’ll learn more about it in the coming months. Please know: We’re keeping the acronym VAG. With the opening of our doors to patient care, you’ll hear us say “VAG Clinic” when you call.
                </Text>
                <Hide above='md'>
                  <Center>
                    <Image
                      alt=''
                      height={251}
                      src='/section-05-about/vag-01@1x.png'
                      width={287}
                    />
                  </Center>
                </Hide>
                <Text marginTop={4} maxWidth={['100%', '100%', 580, 780]}>
                  VAG Clinic is the first Queer and BIPOC-led abortion clinic in the country. We are located on traditional, unceded Tiwa territory, also known as Albuquerque, New Mexico. Our patient care follows an anti-racist and survivor-centered model. We believe in empowering patients by prioritizing their rights, safety, well-being, needs, and wishes. We welcome and support patients from other states and countries.
                </Text>
                <Hide above='md'>
                  <Center marginTop={4}>
                    <Image
                      alt=''
                      height={142}
                      src='/section-05-about/vag-02@1x.png'
                      width={318}
                    />
                  </Center>
                </Hide>
              </Box>
              <Show above='md'>
                <Box marginTop={[4, 4, 10, 0]}>
                  <Image
                    alt=''
                    height={532}
                    src='/section-05-about/vag-03@1x.png'
                    width={354}
                  />
                </Box>
              </Show>
            </Stack>
          </Container>
        </Box>
        <Box bg='teal.100' position='relative' zIndex={1}>
          <Container
            maxW={['container.xs', 'container.sm', 'container.md', 'container.lg', 'container.xl']}
            paddingY={12}
          >
            <Grid
              alignItems='center'
              templateColumns='repeat(10, 1fr)'
            >
              <GridItem colSpan={[0, 0, 3]}>
                <HStack>
                  <Show above='md'>
                    <Image
                      alt=''
                      height={4}
                      src='/icons/line@1x.png'
                      width={320}
                    />
                  </Show>
                  <Show above='xl'>
                    <Image
                      alt=''
                      height={4}
                      marginLeft='-10px'
                      src='/icons/line@1x.png'
                      width={320}
                    />
                  </Show>
                  <Show above='2xl'>
                    <Image
                      alt=''
                      height={4}
                      marginLeft='-10px'
                      src='/icons/line@1x.png'
                      width={320}
                    />
                  </Show>
                </HStack>
              </GridItem>
              <GridItem colSpan={[10, 10, 7]}>
                <Heading
                  as='h2'
                  textAlign={['left', 'left', 'right']}
                  variant='h2'
                >
                  Help us help folks
                </Heading>
              </GridItem>
            </Grid>

            <Text marginTop={4}>
              We are so grateful for the support we have received to help us open VAG Clinic – thank you! Please continue to support us and our mission of providing accessible holistic abortion care to all.
            </Text>
            <Text marginTop={4}>
              <Text as='b'>
                Your funding will be used to increase abortion access for patients!
              </Text>
            </Text>
            <Flex
              alignItems='center'
              direction={['column', 'column', 'row']}
            >
              <Button
                as='a'
                href='https://givebutter.com/SupportVAG'
                marginY={8}
                minW={220}
                variant='brown'
              >
                <Image
                  alt=''
                  height={27}
                  src='/icons/icon-heart@1.png'
                  width={30}
                />
                <Text as='span' paddingLeft={1}>
                  Donate Now
                </Text>
              </Button>
              <Spacer />
              <Image
                alt=''
                height={150}
                src='/section-06-support/hand@1x.png'
                sx={{
                  height: [85, 100, 150],
                  width: [300, 370, 550]
                }}
                width={550}
              />
            </Flex>
          </Container>
        </Box>
        <Footer />
      </main>
    </Box>
  );
}
