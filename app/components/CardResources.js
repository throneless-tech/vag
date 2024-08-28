// Chakra UI imports
import { Image } from '@chakra-ui/next-js';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Text,
} from '@chakra-ui/react';

export default function CardResources(props) {
  return(
    <Card color='brown' width={400}>
      <CardHeader paddingBottom={0}>
        <Heading as='h3' fontSize={24} variant='h3'>
          {props.title}
        </Heading>
      </CardHeader>
      <CardBody fontSize={[18, 20]}>
        {props.body}
        {props.icon ? (
          <Center marginTop={4}>
            {props.svg ? (
              <>
                {props.icon}
              </>
            ) : (
                <Image
              height = {props.height}
            src={props.icon}
            width={props.width}
            />
            )}
          </Center>
        ) : null}
      </CardBody>
      <CardFooter padding={0}>
        <Button
          as='a'
          href={props.href}
          padding={2}
          variant='brown'
          width='100%'
        >
          <Image
            height={26}
            src='/icons/icon-bird@1.png'
            width={21}
          />
          <Text as='span' paddingLeft={2}>
            {props.linkText}
          </Text>
        </Button>
      </CardFooter>
    </Card>
  )
}