import NextLink from "next/link";
import {
  Container,
  Box,
  Text,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import GithubIcon from "./icons/github";

const LinkItem = ({ href, path, target, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("#202023", "#FFFBFF");
  return (
    <Link
      as={NextLink}
      href={href}
      target={target !== "" ? target : null}
      padding={2}
      paddingLeft={active ? 3 : 2}
      paddingRight={active ? 3 : 2}
      rounded={13}
      background={
        active ? useColorModeValue("deepBlue", "cutePurple") : undefined
      }
      color={active ? "#FFFBFF" : inactiveColor}
      style={{ textDecoration: "none" }}
      transition="background 0.3s, color 0.3s, padding 0.3s"
    >
      {children}
    </Link>
  );
};

LinkItem.defaultProps = {
  target: "",
};

const Navbar = (props: any) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      width="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <Container
        display="flex"
        padding={2}
        maxWidth="container.xl"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center" ml={1} mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tight"}>
            Pau García Chiner
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          marginTop={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/" path={path}>
            Inicio
          </LinkItem>
          <LinkItem href="/theme1" path={path}>
            Tema 1
          </LinkItem>
          <LinkItem href="/theme2" path={path}>
            Tema 2
          </LinkItem>
          <LinkItem href="/theme3" path={path}>
            Tema 3
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https:/github.com/pauchiner/networks-webpage/"
            path={path}
          >
            <Box
              alignItems="center"
              justifyContent="center"
              display="flex"
              flexDirection="row"
            >
              <GithubIcon fill={useColorModeValue("#000", "#fff")} />
              <Text paddingLeft={2}>Ver Código</Text>
            </Box>
          </LinkItem>
        </Stack>
        <Box alignItems="flex-end">
          <ThemeToggleButton />
          <Box marginLeft={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={NextLink} href="/" passHref>
                  Inicio
                </MenuItem>
                <MenuItem as={NextLink} href="/theme1" passHref>
                  Tema 1
                </MenuItem>
                <MenuItem as={NextLink} href="/theme2" passHref>
                  Tema 2
                </MenuItem>
                <MenuItem as={NextLink} href="/theme3" passHref>
                  Tema 3
                </MenuItem>
                <MenuItem
                  as={NextLink}
                  target="_blank"
                  href="https://github.com/pauchiner/networks-webpage"
                  passHref
                >
                  Ver Código
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
