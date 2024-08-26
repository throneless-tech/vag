'use client'

// Chakra UI imports
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Hide,
  Highlight,
  HStack,
  List,
  ListItem,
  Show,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'
import { Image, Link } from '@chakra-ui/next-js'

// components
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import CTA from "@/app/components/CTA";
import Footer from '@/app/components/Footer';

import styles from "./page.module.css";
import CardServices from '@/app/components/CardServices';
import CardResources from '@/app/components/CardResources';

export default function Home() {
  return (
    <>
      <Header />
      {/* <main className={styles.main}> */}
      <main>
        <Hero />
        <CTA />
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
              height={434}
              src='/section-02-appt/flower@1x.png'
              sx={{
                height: [200, 260, 374],
                width: [200, 260, 374]
              }}
              width={374}
            />
          </Box>
          <Container color='white' maxW='4xl' paddingY={6}>
            <Heading as='h2' variant='h2'>
              Set up an Appointment
            </Heading>
            <Text paddingTop={4} maxWidth={[400, 600, 780]}>
              To maintain your privacy, we are only scheduling appointments by phone.{' '}
              <Text as='b'>Call or text 555-555-5555, 8 a.m. to 5 p.m. (MDT), Monday through Friday.
              </Text>
            </Text>
            <Center marginTop={6}>
              <Hide above='sm'>
                <Image
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
                paddingX={[6, 8]}
                paddingY={[6, 6, 2]}
                sx={{
                  position: 'relative',
                  _before: {
                    backgroundImage: 'url(/section-02-appt/dot@1x.png)',
                    backgroundRepeat: 'no-repeat',
                    content: '""',
                    height: 95,
                    left: ['50%', '50%', '-9%'],
                    paddingLeft: 9,
                    position: 'absolute',
                    top: ['-40%', '-32%', '50%'],
                    transform: ['translateX(-50%)', 'translateX(-50%)', 'translateY(-50%)'],
                    width: 106,
                  }
                }}
              >
                <Text>
                  What was the the first day of your last menstrual period? or how many weeks pregnant you are according to an ultrasound (if you have had one)?
                </Text>
                <Text>
                  Need Help? Try this{' '}
                  <Link href='#' textDecoration='underline' _hover={{ color: 'blue.500' }}>
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
                paddingX={[6, 8]}
                paddingY={[6, 6, 2]}
                sx={{
                  position: 'relative',
                  _before: {
                    backgroundImage: 'url(/section-02-appt/dot@1x.png)',
                    backgroundRepeat: 'no-repeat',
                    content: '""',
                    height: 95,
                    left: ['50%', '50%', '-9%'],
                    paddingLeft: 7,
                    position: 'absolute',
                    top: ['-46%', '-46%', '50%'],
                    transform: ['translateX(-50%)', 'translateX(-50%)', 'translateY(-50%)'],
                    width: 106,
                  }
                }}
              >
                Do you need help with funding your care? VAG can help coordinate funds and travel for your abortion.
              </ListItem>
              <ListItem
                bg='pink'
                className={styles.listItem}
                marginLeft={[0, 0, 16]}
                marginTop={[20, 20, 8]}
                paddingX={[6, 8]}
                paddingY={[6, 6, 2]}
                sx={{
                  position: 'relative',
                  _before: {
                    backgroundImage: 'url(/section-02-appt/dot@1x.png)',
                    backgroundRepeat: 'no-repeat',
                    content: '""',
                    height: 95,
                    left: ['50%', '50%', '-9%'],
                    paddingLeft: 7,
                    position: 'absolute',
                    top: ['-56%', '-68%', '50%'],
                    transform: ['translateX(-50%)', 'translateX(-50%)', 'translateY(-50%)'],
                    width: 106,
                  }
                }}
              >
                Are you in or are you able to travel to New Mexico?
              </ListItem>
            </List>
            <Center marginTop={6}>
              <Image
                height={5}
                src='/icons/line@1x.png'
                width={300}
              />
              <Show above='sm'>
                <Image
                  height={5}
                  marginLeft='-1px'
                  src='/icons/line@1x.png'
                  width={300}
                />
              </Show>
            </Center>
            <Stack direction={['column', 'row']} marginTop={8}>
              <Button
                marginLeft={['auto', 0]}
                marginRight={['auto', 0]}
                variant='tan'
                width={274}
              >
                <Image
                  height={26}
                  src='/icons/icon-rainbow@1.png'
                  paddingRight={1}
                  width={36}
                />
                <Text as='span'>
                  Call 555-555-5555
                </Text>
              </Button>
              <Text as='b' marginTop={2} textAlign='center'>
                8 a.m. to 5 p.m. (MDT), Monday through Friday.
              </Text>
            </Stack>
          </Container>
        </Box>
        <Box>
          <Container maxW='4xl' paddingY={6}>
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
              marginTop={6}
            >
              <Box>
                <Text marginTop={4}>
                  We provide support and resources to folx having to cross borders due to abortion restrictions in order to receive care at VAG in Albuquerque, New Mexico, located on occupied Tiwa land.
                </Text>
                <Text marginTop={4}>
                  Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia. Itaque earum rerum hic tenetur a sapiente delectus. At vero eos et accusamus. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                </Text>
              </Box>
              <Image
                height={196}
                src='/section-03-come-provide/jug@1x.png'
                width={172}
              />
            </Stack>
            <Grid
              alignItems='center'
              templateColumns='repeat(10, 1fr)'
            >
              <GridItem colSpan={[0, 0, 7]}>
                <Show above='md'>
                  <HStack spacing={0}>
                    <Image
                      height={4}
                      src='/icons/line-teal@1x.png'
                      width={320}
                    />
                    <Image
                      height={4}
                      src='/icons/line-teal@1x.png'
                      width={320}
                    />
                  </HStack>
                </Show>
              </GridItem>
              <GridItem colSpan={[10, 10, 3]}>
                <Heading
                  as='h2'
                  color='teal.200'
                  marginTop={[10, 6]}
                  textAlign={['left', 'left', 'right']}
                >
                  We provide
                </Heading>
              </GridItem>
            </Grid>
            <SimpleGrid columns={[1, 2, 3]} marginTop={4} spacing={4}>
              <CardServices
                body='upiditate non provident, similique sunt in culpa qui officia deserunt mollitia.'
                height={100}
                icon='/section-03-come-provide/moon@1x.png'
                title='In Clinic Abortions'
                width={100}
              />
              <CardServices
                body='upiditate non provident, similique sunt in culpa qui officia deserunt mollitia.'
                height={100}
                icon='/section-03-come-provide/water@1x.png'
                title='Spiritual Services'
                width={210}
              />
              <CardServices
                body='upiditate non provident, similique sunt in culpa qui officia deserunt mollitia.'
                height={100}
                icon='/section-03-come-provide/eye@1x.png'
                title='Grief Counseling'
                width={100}
              />
            </SimpleGrid>
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
            maxW='4xl'
            paddingY={6}
          >
            <Heading as='h2' variant='h2'>
              Other Abortion Resources
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} marginTop={4} spacing={4}>
              <CardResources
                body='ineedana.com is a comprehensive, regularly updated, and personalized resource for abortion seekers in the US.'
                height={81}
                href='https://www.ineedana.com/'
                icon="/section-04-resources/logo-ineeda@1x.png"
                linkText='Go to ineedana.com'
                title='Find abortion support near you'
                width={196}
              />
              <CardResources
                body='The National Network of Abortion Funds (NNAF)is a network of 100 independent abortion funds. These member funds work to remove financial and logistical barriers to abortion access.'
                height={75}
                href='https://abortionfunds.org/find-a-fund/'
                icon="/section-04-resources/logo-nnaf@1x.png"
                linkText='Go to NNAF'
                title='Find an abortion fund'
                width={277}
              />
              <CardResources
                body='[explanation about resource]'
                href='#FIXME'
                linkText='View state laws'
                title='Find out about abortion laws in your state'
              />
            </SimpleGrid>
          </Container>
        </Box>
        <Box position='relative'>
          <Box
            marginLeft='auto'
            marginRight={0}
            position='absolute'
            sx={{
              right: 0,
              top: 0,
              transform: 'translateX(55%) translateY(-30%)',
              zIndex: 0,
            }}
          >
            <Image
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
                bottom: 0,
                right: 0,
                transform: 'translateX(16%) translateY(10%)',
                zIndex: 0,
              }}
            >
              <Image
                height={434}
                src='/section-05-about/cactus@1x.png'
                sx={{
                  height: [150, 250, 350],
                  width: [100, 200, 300]
                }}
                width={374}
              />
            </Box>
          </Show>
          <Container maxW='4xl' paddingY={6}>
            <Heading as='h2' variant='h2'>
              Who is VAG?
            </Heading>
            <Stack direction={['column', 'row']}>
              <Box>
                <Text marginTop={4} maxWidth={['100%', '100%', 580]}>
                  We are a diverse group of abortion counselors and clinicians who came together to dismantle supremacy ideologies within health care while prioritizing support and accessibility needs for both patients and clinic staff.
                </Text>
                <Hide above='md'>
                  <Center>
                    <Image
                      height={251}
                      src='/section-05-about/vag-01@1x.png'
                      width={287}
                    />
                  </Center>
                </Hide>
                <Text marginTop={4} maxWidth={['100%', '100%', 580]}>
                  Valley Abortion Group is the first Queer- and BIPOC-led, employee-directed abortion clinic focused on comprehensive abortion care. We are the fifth clinic in the country, and only clinic is the southwest, to provide abortion care in all stages of pregnancy.
                </Text>
                <Text marginTop={4} maxWidth={['100%', '100%', 580]}>
                  VAG providers care for patients using an anti-racist, survivor-centered and low-intervention delivery model that midwives have used for thousands of years. Lived experience, as well as  scientific evidence, inform our organizational structures, policies, practices, and attitudes, so that power is shared equitably, within our organization as well as with those we serve.
                </Text>
                <Hide above='md'>
                  <Center marginTop={4}>
                    <Image
                      height={142}
                      src='/section-05-about/vag-02@1x.png'
                      width={318}
                    />
                  </Center>
                </Hide>
              </Box>
              <Show above='md'>
                <Image
                  height={532}
                  src='/section-05-about/vag-03@1x.png'
                  width={354}
                />
              </Show>
            </Stack>
          </Container>
        </Box>
        <Box bg='teal.100' position='relative' zIndex={1}>
          <Container maxW='4xl' paddingY={6}>
            <Heading as='h2' textAlign={['left', 'right']}>
              Help us help folks
            </Heading>
            <Text marginTop={4}>
              [why folks should donate] Eaque ipsa quae ab illo inventore veritatis et quasi. Inventore  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Esse  cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in  reprehenderit in voluptate velit.
            </Text>
            <Button marginY={8} variant='brown'>
              Donate Now
            </Button>
          </Container>
        </Box>
        <Footer />
      </main>
    </>
  );
}
