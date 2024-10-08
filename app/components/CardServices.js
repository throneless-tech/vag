// Chakra UI imports
import { Image } from '@chakra-ui/next-js';
import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
} from '@chakra-ui/react';

export default function CardServices(props) {
  return (
    <Card
      bg='teal.50'
      color='brown'
      textAlign='center'
      width={400}
    >
      <CardHeader paddingBottom={0}>
        {props.icon ? (
          <Center>
            <Image
              alt=''
              height={props.height}
              src={props.icon}
              width={props.width}
            />
          </Center>
        ) : null}
        <Heading
          as='h3'
          marginTop={[2, 8]}
        >
          {props.title}
        </Heading>
      </CardHeader>
      <CardBody fontSize={[18, 20]}>
        {props.body}
      </CardBody>
    </Card>
  )
}