import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const NotFound = () => {
  return (
    <Layout title="404">
      <Container mt={8} textAlign="center">
        <Heading as="h1">Página no encontrada</Heading>
        <Text mt={3}>Lo sentimos, nuestra sitio web no contiene esta página.</Text>
        <Divider my={6} />
        <Box my={6} alignItems="center">
          <NextLink href="/" passHref>
            <Button colorScheme="teal">Volver al inicio</Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFound
