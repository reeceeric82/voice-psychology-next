import {
	Stack,
	Heading,
	Text,
	Box,
	Button,
	Center,
	Image,
	Link,
	UnorderedList,
	ListItem,
	useColorModeValue,
  VStack
} from '@chakra-ui/react';

const MobileHome = () => {
	return (
			<VStack py={10}>
			<Stack
				as={Box}
				textAlign={'left'}
				>
				<Image
					borderRadius={'50px'}
					src="/carolin-paul-instrament.jpg"
					alt="Carolin Paul holding an instrament" />
				<Heading>&#220;ber mich</Heading>
				<Text fontSize={'xl'}>
					Ich wurde 1993 in Niederbayern geboren, wuchs dort mit meiner Familie auf und absolvierte 2012 mein Abitur. 
					Schon seit Kindheitstagen war ich regelm&#228;&#223;ig an Musikprojekten aller Art beteiligt. 
					Mit 16 Jahren trat ich als S&#228;ngerin meiner ersten Band bei und betrieb dies nebenberuflich&quot; &#252;ber meine gesamte Studienzeit hinweg.
				</Text>
				<Text fontSize={'xl'}>
					2022 schloss ich meinen Master in Psychologie an der Paris Lodron Universit&#228;t Salzburg ab sowie parallel eine Ausbildung zur Mentorin. 
					Im selben Jahr absolvierte ich am ISGC in Wien die Weiterbildung zur Gesangstherapeutin (geleitet von Julia Hwesta-Spitzer,&nbsp;
						<Link href="www.singdichfrei.at" target="_blank" rel="noopener noreferer">www.singdichfrei.at</Link>&nbsp;). 
					Im Oktober 2022 begann ich die Ausbildung zur Psychotherapeutin mit Schwerpunkt Kognitive Verhaltenstherapie in Berlin.
					In meiner Freizeit gehe ich am liebsten auf Rock, Metal und Punk Konzerte oder mache selbst Musik. 
				</Text>
			</Stack>
			<Box py={5}>
				<Button>
					<Link href="/uber">Weiterlesen</Link>
				</Button>
			</Box>

			{/* Psychologische */}
			<Stack pt={55}>
				<Heading id="psychologische-beratung">Psychologische Beratung</Heading>
				<Text fontSize={'xl'}>
					Psychologische Beratung kann helfen, wenn man mit der aktuellen Situation unzufrieden ist, sich belastet f&#252;hlt oder nicht wei&#223;, wie es weiter gehen soll. 
					Sie unterst&#252;tzt dabei, L&#246;sungen und neue Wege zu finden. Hierbei kann schon ein ganz spezifisches Ziel vorliegen oder wir erarbeiten ein Ziel in der Beratung.
				</Text>
				<Text fontSize={'xl'}>
					Ich kann dich einf&#252;hlsam und bedacht durch schwierige Zeiten, Lebenskrisen und neue Herausforderungen begleiten. 
					Als Psychologin ist es mir wichtig, hierbei immer die berufsethischen und wissenschaftlichen Standards einzuhalten.
				</Text>
				<Heading>Welche Themen kann man bearbeiten?</Heading>
				<UnorderedList px={4}>
					<ListItem>
						<Text fontSize={'xl'}>Visionen und Ziele erarbeiten</Text>
					</ListItem>
					<ListItem>
						<Text fontSize={'xl'}>Ressourcen erarbeiten und stärken</Text>
					</ListItem>
					<ListItem>
						<Text fontSize={'xl'}>Unterst&#252;tzung in schwierigen Lebensphasen (z.B. Verlust einer geliebten Person, Krankheit, berufliche Neuorientierung)</Text>
					</ListItem>
					<ListItem>
						<Text fontSize={'xl'}>Mit den eigenen Emotionen besser in Kontakt kommen</Text>
					</ListItem>
				</UnorderedList>
			</Stack>
			<Box py={5}>
				<Button>
					<Link href="#">Mehr erfahren</Link>
				</Button>
			</Box>

			{/* Gesangstherapie */}
				<Stack pt={55}>
				<Heading>Gesangstherapie</Heading>
				<Text fontSize={'xl'}>
					Du kennst vielleicht schon das Prinzip einer Gespr&#228;chstherapie. Man spricht &#252;ber das, was einen besch&#228;ftigt, was einen belastet. 
					Doch manchmal reicht Reden nicht aus, manchmal kann die Sprache nicht das ausdr&#252;cken, was uns wirklich bewegt, tief in uns vergraben. 
				</Text>
				<Text fontSize={'xl'}>
					Dann kann Gesangstherapie helfen. Hier ist die Stimme in ihrer Gesamtheit das Werkzeug. Sie dient als Ausdrucksmittel, Ventil, Katalysator, Br&#252;cke zum Unbewussten. 
				</Text>

				<Heading>Welche Themen kann man bearbeiten?</Heading>
				<UnorderedList px={5}>
						<ListItem>
							<Text fontSize={'xl'}>Alle Emotionen (z.B. Wut, Trauer) ersp&#252;ren, ausdr&#252;cken und aufl&#246;sen</Text>
						</ListItem>
						<ListItem>
							<Text fontSize={'xl'}>Arbeit mit dem inneren Kind</Text>
						</ListItem>
						<ListItem>
							<Text fontSize={'xl'}>Blockaden l&#246;sen</Text>
						</ListItem>
						<ListItem>
							<Text fontSize={'xl'}>Unterst&#252;tzung bei Atemproblemen</Text>
						</ListItem>
						<ListItem>
							<Text fontSize={'xl'}>Unterst&#252;tzung bei Stimm-und Sprechproblemen (z.B. Heiserkeit, Stottern)</Text>
						</ListItem>
						<ListItem>
							<Text fontSize={'xl'}>Lampenfieber</Text>
						</ListItem>
				</UnorderedList>
				</Stack>
			<Box py={5}>
				<Button>
					<Link href="#">Mehr erfahren</Link>
				</Button>
			</Box>

			{/* Kontakt */}
				<Stack pt={55}>
					<Heading>Kontaktiere mich</Heading>
					<Text fontSize={'xl'}>Du kannst mir gerne eine Email senden, falls du Fragen hast.</Text>
					</Stack>
			<Box py={5}>
				<Button>
					<Link href="/kontakt">Schreib mir</Link>
				</Button>
			</Box>
			</VStack>
	)
}

export default MobileHome;
