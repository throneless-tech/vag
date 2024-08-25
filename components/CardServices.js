// Chakra UI imports
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
} from '@chakra-ui/react';

export default function CardServices(props) {
  return (
    <Card
      bg='teal.50'
      color='brown'
      textAlign='center'
    >
      <CardHeader>
        <Heading as='h3'>
          {props.title}
        </Heading>
      </CardHeader>
      <CardBody fontSize={[18, 20]}>
        {props.body}
      </CardBody>
    </Card>
  )
}