import { Box, Container, Heading } from "@chakra-ui/react";
import Layout from "../components/layouts/article";

const Page = () => {
  return (
    <Layout title="Inicio">
      <Container>
        <Box marginTop={10} alignItems="center" textAlign="center">
          <Heading size="lg">Cableados de redes</Heading>
          <p style={{ marginTop: 6 }}>
            Aquí irá una breve presentación del blog.
          </p>
        </Box>
      </Container>
    </Layout>
  );
};

export default Page;
