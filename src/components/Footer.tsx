import {
  Box,
  Flex,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <Box
      as="footer"
      bg={useColorModeValue("orange.50", "teal.700")}
      py="4"
      bottom="0"
      left="0"
      right="0"
      mt="auto"
    >
      <Flex maxW="container.xl" mx="auto">
        <Box flex="1" textAlign={"center"}>
          <VStack>
            <Text as={"b"} fontSize={"sm"}>
              Designed and Developed by&nbsp;
              <Link
                href="https://reecerussell.xyz"
                target="_blank"
                rel="noopener noreferer"
              >
                Reece Russell
              </Link>
            </Text>
            <Text as={"b"} fontSize={"sm"}>
              Copyright &copy; Voice Psychology {year}
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
