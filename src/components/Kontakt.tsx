import {
  Box,
  Heading,
  Link,
  Stack,
  StackDivider,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { EmailIcon } from "@chakra-ui/icons";


const KontaktPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 700px)");
  return <>{isMobile ? <MobileKontakt /> : <DesktopKontakt />}</>;
};

const DesktopKontakt = () => {
  return (
    <>
      {/* Email Section */}
      <Stack
        as={Box}
        textAlign={"left"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 6 }}
      >
        <Stack spacing={4}>
          <Text fontSize={"3xl"}>Email:</Text>
          <hr />
          <Text fontSize={"2xl"}>
            <EmailIcon mr={2} />
            <Link href="mailto:carolin@voicepsychology.de">
              carolin@voicepsychology.de
            </Link>
          </Text>
        </Stack>
        {/* Email Section End */}

        {/* Social Media Section */}
        <Stack spacing={4}>
          <Text fontSize={"3xl"}>Social Media:</Text>
          <Text fontSize={'xl'}>Du kannst mir auf folgenden Plattformen folgen</Text>
          <hr />
          <Stack as={Box} textAlign={"left"} spacing={{ base: 8, md: 10 }}>
            <Text fontSize={"2xl"}>
              <FontAwesomeIcon icon={faInstagram} className="fab instagram" />
              <Link
                ml={2}
                href="https://www.instagram.com/voice.psychology/"
                target="_blank"
                rel="noopener noreferer"
              >
                voice.psychology
              </Link>
            </Text>
            <Text fontSize={"2xl"}>
              <FontAwesomeIcon icon={faTiktok} className="fab tiktok" />
              <Link
                ml={2}
                href="https://www.tiktok.com/@voice.psychology"
                target="_blank"
                rel="noopener noreferer"
              >
                voice.psychology
              </Link>
            </Text>
            <Text fontSize={"2xl"}>
              <FontAwesomeIcon icon={faLinkedinIn} className="fab linkedin" />
              <Link
                ml={2}
                href="https://www.linkedin.com/in/carolin-paul-msc-11a325220/"
                target="_blank"
                rel="noopener noreferer"
              >
                Carolin Paul MSc
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

const MobileKontakt = () => {
  return (
    <>
      {/* Email Section */}
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 6 }}
      >
        <Stack divider={<StackDivider />} spacing={4}>
          <Text fontSize={"3xl"}>Email:</Text>
          <Text fontSize={"2xl"}>
            <EmailIcon mr={2} />
            <Link href="mailto:carolin@voicepsychology.de">
              carolin@voicepsychology.de
            </Link>
          </Text>
        </Stack>
        {/* Email Section End */}

        {/* Social Media Section */}
        <Stack divider={<StackDivider />} spacing={4}>
          <Text fontSize={"3xl"}>Social Media:</Text>
          <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 10 }}>
            <Text fontSize={"2xl"}>
              <FontAwesomeIcon icon={faInstagram} className="fab instagram" />
              <Link
                ml={2}
                href="https://www.instagram.com/voice.psychology/"
                target="_blank"
                rel="noopener noreferer"
              >
                voice.psychology
              </Link>
            </Text>
            <Text fontSize={"2xl"}>
              <FontAwesomeIcon icon={faTiktok} className="fab tiktok" />
              <Link
                ml={2}
                href="https://www.tiktok.com/@voice.psychology"
                target="_blank"
                rel="noopener noreferer"
              >
                voice.psychology
              </Link>
            </Text>
            <Text fontSize={"2xl"}>
              <FontAwesomeIcon icon={faLinkedinIn} className="fab linkedin" />
              <Link
                ml={2}
                href="https://www.linkedin.com/in/carolin-paul-msc-11a325220/"
                target="_blank"
                rel="noopener noreferer"
              >
                Carolin Paul MSc
              </Link>
            </Text>
          </Stack>
        </Stack>
        
      </Stack>
    </>
  )
};

export default KontaktPage;
