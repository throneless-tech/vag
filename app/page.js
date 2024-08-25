'use client'

// Chakra UI imports
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Heading,
  Highlight,
  HStack,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

// NextJS imports
import Image from "next/image";

// components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Footer from '@/components/Footer';

import styles from "./page.module.css";
import CardServices from '@/components/CardServices';
import CardResources from '@/components/CardResources';

export default function Home() {
  return (
    <>
      <Header />
      {/* <main className={styles.main}> */}
      <main>
        <Hero />
        <CTA />
        <Box bg='red.500'>
          <Container color='white' paddingY={6}>
            <Heading as='h2'>
              Set up an Appointment
            </Heading>
            <Text paddingTop={4}>
              To maintain your privacy, we are only scheduling appointmentsby phone.
              <Text as='b'> Call or text 555-555-5555 8 a.m. to 5 p.m. (MDT), Monday through Friday.
              </Text>
            </Text>
            <Heading as='h3' paddingTop={8} variant='h3'>
              What to know when you call
            </Heading>
            <List color='brown' className={styles.list}>
              <ListItem
                bg='pink'
                className={styles.listItem}
                marginTop={[12, 4]}
                paddingX={6}
                paddingY={[6, 2]}
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
                marginTop={[12, 4]}
                paddingX={6}
                paddingY={[6, 2]}
              >
                VAG can help coordinate funds and travel for your abortion.
              </ListItem>
              <ListItem
                bg='pink'
                className={styles.listItem}
                marginTop={[12, 4]}
                paddingX={6}
                paddingY={[6, 2]}
              >
                Are you in or are you able to travel to New Mexico?
              </ListItem>
            </List>
            <Stack direction={['column', 'row']} marginTop={8}>
              <Button
                marginLeft={['auto', 0]}
                marginRight={['auto', 0]}
                variant='tan'
                width={269}
              >
                Call 555-555-5555
              </Button>
              <Text as='b' marginTop={2} textAlign='center'>
                8 a.m. to 5 p.m. (MDT), Monday through Friday.
              </Text>
            </Stack>
          </Container>
        </Box>
        <Box>
          <Container paddingY={6}>
            <Heading as='h2'>
              Should you come to VAG Clinic?
            </Heading>
            <Heading as='h3' color='red.100' marginTop={2} variant='h3'>
              <Highlight
                query={['Anyone who desires an abortio']}
                styles={{ color: 'red.100', textDecoration: 'underline', whiteSpace: 'wrap' }}
              >
                Anyone who desires an abortion should call us. Period.
              </Highlight>
            </Heading>
            <Text marginTop={4}>
              We provide support and resources to folx having to cross borders due to abortion restrictions in order to receive care at VAG in Albuquerque, New Mexico, located on occupied Tiwa land.
            </Text>
            <Text marginTop={4}>
              Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia. Itaque earum rerum hic tenetur a sapiente delectus. At vero eos et accusamus. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
            </Text>
            <Heading as='h2' marginTop={6} textAlign={['center', 'right']}>
              We provide
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} marginTop={4} spacing={4}>
              <CardServices title='In Clinic Abortions' body='upiditate non provident, similique sunt in culpa qui officia deserunt mollitia.' />
              <CardServices title='Spiritual Services' body='upiditate non provident, similique sunt in culpa qui officia deserunt mollitia.' />
              <CardServices title='Grief Counseling' body='upiditate non provident, similique sunt in culpa qui officia deserunt mollitia.' />
            </SimpleGrid>
          </Container>
        </Box>
        <Box bg='pink'>
          <Container paddingY={6}>
            <Heading as='h2'>
              Other Abortion Resources
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} marginTop={4} spacing={4}>
              <CardResources
                body='ineedana.com is a comprehensive, regularly updated, and personalized resource for abortion seekers in the US.'
                href='https://www.ineedana.com/'
                linkText='Go to ineedana.com'
                title='Find abortion support near you'
              />
              <CardResources
                body='The National Network of Abortion Funds (NNAF)is a network of 100 independent abortion funds. These member funds work to remove financial and logistical barriers to abortion access.'
                href='https://abortionfunds.org/find-a-fund/'
                linkText='Go to NNAF'
                title='Find an abortion fund'
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
        <Box>
          <Container paddingY={6}>
            <Heading as='h2'>
              Who is VAG?
            </Heading>
            <Text marginTop={4}>
              We are a diverse group of abortion counselors and clinicians who came together to dismantle supremacy ideologies within health care while prioritizing support and accessibility needs for both patients and clinic staff.
            </Text>
            <Text marginTop={4}>
              Valley Abortion Group is the first Queer- and BIPOC-led, employee-directed abortion clinic focused on comprehensive abortion care. We are the fifth clinic in the country, and only clinic is the southwest, to provide abortion care in all stages of pregnancy.
            </Text>
            <Text marginTop={4}>
              VAG providers care for patients using an anti-racist, survivor-centered and low-intervention delivery model that midwives have used for thousands of years. Lived experience, as well as  scientific evidence, inform our organizational structures, policies, practices, and attitudes, so that power is shared equitably, within our organization as well as with those we serve.
            </Text>
          </Container>
        </Box>
        <Box bg='teal.100'>
          <Container paddingY={6}>
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
