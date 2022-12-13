import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { ThemeGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import Section from "../components/section";

import thumbExample from "../public/images/example.jpg";

const Theme1 = () => {
  return (
    <Layout title="Tema 1">
      <Container>
        <Box marginTop={10} textAlign="center">
          <SimpleGrid columns={[1, 1, 2]} gap={3}>
            <Section delay={0.1}>
              <ThemeGridItem
                themeId={1}
                id="example"
                title="Example"
                thumbnail={thumbExample}
              >
                This is an example item.
              </ThemeGridItem>
            </Section>
            <Section delay={0.2}>
              <ThemeGridItem
                themeId={1}
                id="example"
                title="Example"
                thumbnail={thumbExample}
              >
                This is an example item.
              </ThemeGridItem>
            </Section>
            <Section delay={0.3}>
              <ThemeGridItem
                themeId={1}
                id="example"
                title="Example"
                thumbnail={thumbExample}
              >
                This is an example item.
              </ThemeGridItem>
            </Section>
            <Section delay={0.4}>
              <ThemeGridItem
                themeId={1}
                id="example"
                title="Example"
                thumbnail={thumbExample}
              >
                This is an example item.
              </ThemeGridItem>
            </Section>
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  );
};

export default Theme1;
