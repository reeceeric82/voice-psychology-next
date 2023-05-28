import { 
	Box,
	Link,
	HStack,
	Stack,
	Text,
} from "@chakra-ui/react";


const DesktopUber = () => {

	return (
		<Stack>
			<HStack pt={20}>
				<Stack
					as={Box}
					textAlign={'left'}
					>
					<Text fontSize={'xl'}>
						Ich wurde 1993 in Niederbayern geboren, wuchs dort mit meiner Familie auf und absolvierte 2012 mein Abitur. 
						Schon seit Kindheitstagen war ich regelm&#228;&#223;ig an Musikprojekten aller Art beteiligt. 
						Mit 16 Jahren trat ich als S&#228;ngerin meiner ersten Band bei und betrieb dies nebenberuflich&quote; &#252;ber meine gesamte Studienzeit hinweg.
					</Text>
					<Text fontSize={'xl'}>
						2022 schloss ich meinen Master in Psychologie an der Paris Lodron Universit&#228;t Salzburg ab sowie parallel eine Ausbildung zur Mentorin. 
						Im selben Jahr absolvierte ich am ISGC in Wien die Weiterbildung zur Gesangstherapeutin (geleitet von Julia Hwesta-Spitzer,&nbsp;
						<Link textDecoration={'underline'} href="www.singdichfrei.at" target="_blank" rel="noopener noreferer">www.singdichfrei.at</Link>&nbsp;). 
						Im Oktober 2022 begann ich die Ausbildung zur Psychotherapeutin mit Schwerpunkt Kognitive Verhaltenstherapie in Berlin.
						In meiner Freizeit gehe ich am liebsten auf Rock, Metal und Punk Konzerte oder mache selbst Musik. 
					</Text>
				</Stack>
			</HStack>
			<HStack py={20}>
				<Stack>
					<Text fontSize={'xl'}>
						Die Entdeckung der Gesangstherapie war f&#252;r mich &#252;berragend. 
						Die Kombination aus Musik, Gesang und Psychologie ist genau der Schnittpunkt, an dem alle meine Leidenschaften zusammenflie&#223;en. 
						Mit Musik Menschen helfen - etwas Sch&#246;neres k&#246;nnte ich mir nicht vorstellen. 
						Aber auch die reine psychologische Beratung bereitet mir sehr viel Freude und ich kann es kaum erwarten, bis ich ebenfalls Psychotherapie anbieten kann. 
						Die bestm&#246;gliche Behandlung f&#252;r meine Klient:innen und deren Bed&#252;rfnisse steht immer im Vordergrund f&#252;r mich. 
						Sowohl die Gesangstherapie als auch die Psychologie stellen eine Basis dar, von der aus jeder seinen eigenen spezifischen Weg einschl&#228;gt. 
						Mein Angebot richtet sich an jede Person, welche Gesangstherapie oder psychologische Beratung gerne ausprobieren m&#246;chte. 
						Insbesondere ist mein Angebot aber f&#252;r Musiker:innen, K&#252;nsterlin:innen und Performer aller Art ausgelegt. 
					</Text>
				</Stack>
			</HStack>
			<HStack>
				<Stack py={10}>
					<Text fontSize={'xl'}>
						Der Druck im Business kann schnell belastend werden und seine Spuren hinterlassen. 
						Die Stimme kann beeintr&#228;chtigt werden und der K&#246;rper im Allgemeinen. 
						Es k&#246;nnen Angstzust&#228;nde, Lampenfieber und andere psychische Symptome auftreten. 
						Die Gesangstherapie bietet eine M&#246;glichkeit dem Wunsch nach Ausdruck ohne Bewertung nachzugehen. 
						Es gibt kein richtig und falsch, nur freies singen und t&#246;nen, fernab von Leistungsdruck. 
						Auch besungen werden stellt eine M&#246;glichkeit dar, welche immer ein sehr pers&#246;nliches und intensives Erlebnis ist. 
						In der psychologischen Beratung wird haupts&#228;chlich gesprochen. 
						Hier kann alles thematisiert werden, was auf dem Herzen liegt: Sorgen, &#196;ngste aber auch W&#252;nsche und Ziele. 
						Eine Kombination von psychologischer Beratung und Gesangstherapie ist nat&#252;rlich auch m&#246;glich. 
						In den einzelnen Men&#252;punkten zu Gesangstherapie und psychologischer Beratung findest du noch detailliertere Informationen zu meinen Angeboten.
					</Text>
				</Stack>
			</HStack>
		</Stack>
	)
}

export default DesktopUber;
