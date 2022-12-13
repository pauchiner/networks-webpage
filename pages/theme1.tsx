import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ThemeGridItem } from "../components/grid-item";
import Section from "../components/section";

import thumbExample from '../public/images/example.jpg';

const Theme1 = () => {
  return (
    <Container as={motion.div} initial={{ paddingTop: 10, opacity: 0 }} animate={{ paddingTop: 0, opacity: 1 }} >
      <Box marginTop={10} textAlign="center">
        <SimpleGrid columns={[1, 1, 2]} gap={3}>
          <Section delay={0.1}>
            <ThemeGridItem themeId={1} id="example" title="Example" thumbnail={thumbExample}>
              This is an example item.
            </ThemeGridItem>
          </Section>
          <Section delay={0.2}>
            <ThemeGridItem themeId={1} id="example" title="Example" thumbnail={thumbExample}>
              This is an example item.
            </ThemeGridItem>
          </Section>
          <Section delay={0.3}>
            <ThemeGridItem themeId={1} id="example" title="Example" thumbnail={thumbExample}>
              This is an example item.
            </ThemeGridItem>
          </Section>
          <Section delay={0.4}>
            <ThemeGridItem themeId={1} id="example" title="Example" thumbnail={thumbExample}>
              This is an example item.
            </ThemeGridItem>
          </Section>
        </SimpleGrid>
      </Box>
    </Container>
  )
}

export default Theme1;
