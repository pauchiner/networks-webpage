import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";

const NotFound = () => {
  return (
    <Layout title="404">
      <Container mt={8} textAlign="center">
        <Container
          mb={8}
          mt={8}
          display="flex"
          w="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="/images/sad-emoji.png"
            width={80}
            height={80}
            alt="sad face"
          />
        </Container>
        <Heading as="h1">Página no encontrada</Heading>
        <Text mt={3}>
          Lo sentimos, nuestro sitio web no contiene esta página.
        </Text>
        <Divider my={6} />
        <Box my={6} alignItems="center">
          <NextLink href="/" passHref>
            <Button
              color="#fff"
              background={useColorModeValue("deepBlue", "cutePurple")}
            >
              Volver al inicio
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  );
};

export default NotFound;
