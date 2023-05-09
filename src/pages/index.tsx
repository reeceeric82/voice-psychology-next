import Head from 'next/head';
// import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import { Box, ChakraProvider, Container, Stack, Heading, Button, Text, Center, Link } from '@chakra-ui/react';
import theme from './theme';

export default function Home() {

	return 	(	
		<ChakraProvider theme={theme}>
			<Head>
				<title>Voice</title>
				<meta name="description" content="Voice Psychology nextjs app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Nav />
				<Container maxW={'3xl'}>
					<Stack 
						as={Box}
						textAlign={'center'}
						spacing={{ base: 8, md: 14 }}
						py={{ base: 20, md: 6 }}>
						<Heading>Willkommen bei Voice</Heading>
						<Text fontSize={'xl'}>Psychologische Beratunf & Gesangtherapie</Text>
					</Stack>
					<Center>
						<Button>Mehr erfahren</Button>
					</Center>
					<Stack>
						<Heading>Uber mich</Heading>
						<Text fontSize={'xl'}>
							Ich wurde 1993 in Niederbayern geboren, wuchs dort mit meiner Familie auf und absolvierte 2012 mein Abitur. 
							Schon seit Kindheitstagen war ich regelmäßig an Musikprojekten aller Art beteiligt. 
							Mit 16 Jahren trat ich als Sängerin meiner ersten Band bei und betrieb dies nebenberuflich über meine gesamte Studienzeit hinweg.
							2022 schloss ich meinen Master in Psychologie an der Paris Lodron Universität Salzburg ab sowie parallel eine Ausbildung zur Mentorin. 
							Im selben Jahr absolvierte ich am ISGC in Wien die Weiterbildung zur Gesangstherapeutin (geleitet von Julia Hwesta-Spitzer, 
							<Link href='www.singdichfrei.at' target="_blank" rel="noopner noreferer"> www.singdichfrei.at</Link> ). 
							Im Oktober 2022 begann ich die Ausbildung zur Psychotherapeutin mit Schwerpunkt Kognitive Verhaltenstherapie in Berlin.
							In meiner Freizeit gehe ich am liebsten auf Rock, Metal und Punk Konzerte oder mache selbst Musik.
						</Text>
					</Stack>
				</Container>
			</main>
		</ChakraProvider>
	)
}
