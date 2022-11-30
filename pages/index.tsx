import { Text, Box, Container } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" padding={3} background="teal" textAlign="center">
        <Text fontSize="lg" color="white">Hello World!</Text>
      </Box>
    </Container>
  )
}

export default Page;
