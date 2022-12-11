import Head from "next/head";
import Navbar from '../navbar';
import { Box, Container } from '@chakra-ui/react';

const Main = ({ children, router }) => {
  return (
    <Box as="main" paddingBottom={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pau García Chiner - Inicio</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" paddingTop={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main;
