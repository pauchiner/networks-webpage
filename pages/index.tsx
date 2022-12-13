import { Text, Box, Container, Heading } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";

const Page = () => {
  return (
    <Layout title="Inicio">
      <Container>
        <Box marginTop={10} textAlign="center">
          <Text fontSize="lg" >Welcome to my webpage</Text>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Tema 1
          </Heading>
          <p>Contenido</p>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page;
