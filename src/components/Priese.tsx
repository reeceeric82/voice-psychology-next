import {
  Box,
  Button,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";

const PriesePage = () => {
  const [isMobile] = useMediaQuery("(max-width: 700px)");
  return <>{isMobile ? <MobilePriese /> : <DesktopPriese />}</>;
};

{/*Desktop */}
const DesktopPriese = () => {
  return (
    <Stack spacing={{ base: 8, md: 14 }}>
      <Stack as={Box} textAlign={"left"}>
        <Heading>Einzelsetting</Heading>
        <Text as={'i'} fontSize={"xl"}>(Gesangstherapie, Psychologische Beratung)</Text>
        <UnorderedList>
          <ListItem fontSize={"xl"}>
            Einzelstunde - 50 min @<Text as={"b"}>79€</Text>
          </ListItem>
        </UnorderedList>
        <Box py={2}>
          <Button>
            <Link href="/kontakt">Jetzt buchen</Link>
          </Button>
        </Box>
      </Stack>

      <Stack as={Box} textAlign={"left"}>
        <Heading>Gruppensetting</Heading>
        <Text as={'i'} fontSize={'xl'}>(Gesangstherapie, Psychologische Beratung)</Text>
        <UnorderedList>
            <ListItem fontSize={'xl'}>
            Einzelstunde - 90 min @<Text as={'b'}>20€</Text>p/p
            </ListItem>
            <ListItem fontSize={'xl'}>
            6er Block - 90 min @<Text as={'b'}>15€</Text>p/p
            </ListItem>
        </UnorderedList>
        <Box
        py={2}>
            <Button>
                <Link href="/kontakt">Jetzt buchen</Link>
            </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

{/* Mobile */}
const MobilePriese = () => {
  return (
    <VStack py={10}>
    <Stack spacing={{ base: 8, md: 14 }}>
      <Stack as={Box} textAlign={"left"}>
        <Heading>Einzelsetting</Heading>
        <Text as={'i'} fontSize={"xl"}>(Gesangstherapie, Psychologische Beratung)</Text>
        <UnorderedList>
          <ListItem fontSize={"xl"}>
            Einzelstunde - 50 min @<Text as={"b"}>79€</Text>
          </ListItem>
        </UnorderedList>
        <Box py={2}>
          <Button>
            <Link href="/kontakt">Jetzt buchen</Link>
          </Button>
        </Box>
      </Stack>

      <Stack as={Box} textAlign={"left"}>
        <Heading>Gruppensetting</Heading>
        <Text as={'i'} fontSize={'xl'}>(Gesangstherapie, Psychologische Beratung)</Text>
        <UnorderedList>
            <ListItem fontSize={'xl'}>
            Einzelstunde - 90 min @<Text as={'b'}>20€</Text>p/p
            </ListItem>
            <ListItem fontSize={'xl'}>
            6er Block - 90 min @<Text as={'b'}>15€</Text>p/p
            </ListItem>
        </UnorderedList>
        <Box
        py={2}>
            <Button>
                <Link href="/kontakt">Jetzt buchen</Link>
            </Button>
        </Box>
      </Stack>
    </Stack>
    </VStack>
  );
};

export default PriesePage;
