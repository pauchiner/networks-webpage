import { Text, Box, Container, Heading } from "@chakra-ui/react";
import Section from "../components/section";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <Container as={motion.div} initial={{ paddingTop: 10, opacity: 0 }} animate={{ paddingTop: 0, opacity: 1 }} >
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
  )
}

export default Page;
