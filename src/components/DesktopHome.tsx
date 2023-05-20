import {
	HStack,
	Stack,
	Heading,
	Text,
	Box,
	Button,
	Center,
	Image,
	useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';

const DesktopHome = () => {
	return (
			<HStack>
			<Stack
				as={Box}
				textAlign={'left'}
				>
				<Heading>&#220;ber mich</Heading>
				<Text fontSize={'xl'}>
					Ich wurde 1993 in Niederbayern geboren, wuchs dort mit meiner Familie auf und absolvierte 2012 mein Abitur. 
					Schon seit Kindheitstagen war ich regelm&#228;&#223;ig an Musikprojekten aller Art beteiligt. 
					Mit 16 Jahren trat ich als S&#228;ngerin meiner ersten Band bei und betrieb dies nebenberuflich&quote; &#252;ber meine gesamte Studienzeit hinweg.
				</Text>
				<Text fontSize={'xl'}>
					2022 schloss ich meinen Master in Psychologie an der Paris Lodron Universit&#228;t Salzburg ab sowie parallel eine Ausbildung zur Mentorin. 
					Im selben Jahr absolvierte ich am ISGC in Wien die Weiterbildung zur Gesangstherapeutin (geleitet von Julia Hwesta-Spitzer,&nbsp;
						<Link href="www.singdichfrei.at" target="_blank" rel="noopener noreferer">www.singdichfrei.at</Link>&nbsp;). 
					Im Oktober 2022 begann ich die Ausbildung zur Psychotherapeutin mit Schwerpunkt Kognitive Verhaltenstherapie in Berlin.
					In meiner Freizeit gehe ich am liebsten auf Rock, Metal und Punk Konzerte oder mache selbst Musik. 
				</Text>
					<Box
						py={2}>
						<Button>
							<Link href="/uber">Weiterlesen</Link>
						</Button>
					</Box>
			</Stack>
				<Stack
					p={8}>
					<Image
						borderRadius={'full'}
						src="/carolin-paul-instrament.jpg"
						alt="Carolin Paul holding an instrament" />
				</Stack>
			</HStack>
	)
}

export default DesktopHome;
