import { Text, Box, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Theme1 = () => {
  return (
    <Container as={motion.div} initial={{ paddingTop: 10, opacity: 0 }} animate={{ paddingTop: 0, opacity: 1 }} >
      <Box marginTop={10} textAlign="center">
        <Text fontSize="lg" >Tema 1</Text>
      </Box>
    </Container>
  )
}

export default Theme1;
