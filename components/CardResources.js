// Chakra UI imports
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from '@chakra-ui/react';

export default function CardResources(props) {
  return(
    <Card color='brown'>
      <CardHeader>
        <Heading as='h3' fontSize={24} variant='h3'>
          {props.title}
        </Heading>
      </CardHeader>
      <CardBody fontSize={[18, 20]}>
        {props.body}
      </CardBody>
      <CardFooter padding={0}>
        <Button
          as='a'
          href={props.href}
          padding={2}
          variant='brown'
          width='100%'
        >
          {props.linkText}
        </Button>
      </CardFooter>
    </Card>
  )
}