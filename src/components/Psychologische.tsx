import { useMediaQuery } from '@chakra-ui/react';
import {
    Box,
    Button,
    Link,
    HStack,
    Heading,
    Stack,
    Text,
    UnorderedList,
    ListItem,
    StackDivider,
    Spacer,
    Center,
} from "@chakra-ui/react";


const PsychologischePage = () => {
	const [isMobile] = useMediaQuery('(max-width: 700px)');
	return (
		<>
			{isMobile ? <MobilePsychologische /> : <DesktopPsychologische />}
		</>
	)
};

{/* Desktop */}
const DesktopPsychologische = () => {

    return (
        <Stack
        spacing={{ base: 8, md: 14 }}>
            {/* Psychologische */}
            <Stack
            as={Box}
            textAlign={'left'}>
                <Heading>Psychologische Beratung</Heading>
                <Text fontSize={'xl'}>
                    Psychologische Beratung kann helfen, wenn man mit der aktuellen Situation unzufrieden ist, sich belastet f&#252;hlt oder nicht wei&#223;,
                    wie es weiter gehen soll.
                    Sie unterst&#252;tzt dabei, L&#246;sungen und neue Wege zu finden.
                    Hierbei kann schon ein ganz spezifisches Ziel vorliegen oder wir erarbeiten ein Ziel in der Beratung.
                </Text>

                <Text fontSize={'xl'}>
                    Ich kann dich einf&#252;hlsam und bedacht durch schwierige Zeiten, Lebenskrisen und neue Herausforderungen begleiten.
                    Als Psychologin ist es mir wichtig, hierbei immer die berufsethischen und wissenschaftlichen Standards einzuhalten.
                </Text>
            </Stack>

            <Spacer />

            <Stack
            as={Box}
            textAlign={'left'}>
                <Heading>Welche Themen kann man bearbeiten?</Heading>
                <UnorderedList>
                    <ListItem fontSize={'xl'}>Visionen und Ziele erarbeiten</ListItem>
                    <ListItem fontSize={'xl'}>Ressourcen erarbeiten und st&#228;rken</ListItem>
                    <ListItem fontSize={'xl'}>Unterst&#252;tzung in schwierigen Lebensphasen (z.B. Verlust einer geliebten Person, Krankheit, berufliche Neuorientierung)</ListItem>
                    <ListItem fontSize={'xl'}>mit den eigenen Emotionen besser in Kontakt kommen</ListItem>
                    <ListItem fontSize={'xl'}>Arbeit mit dem inneren Kind</ListItem>
                    <ListItem fontSize={'xl'}>Bed&#252;rfnisse erkennen und ausdrücken</ListItem>
                    <ListItem fontSize={'xl'}>Selbstakzeptanz, Selbstliebe</ListItem>
                    <ListItem fontSize={'xl'}>Lampenfieber</ListItem>
                </UnorderedList>

                <Text fontSize={'xl'}>
                    Psychologische Beratung dient nicht zur Behandlung oder Diagnostik psychischer St&#246;rungen, wie es die Psychotherapie tut.
                    Sie greift schon fr&#252;her, bevor es &#252;berhaupt zu einer St&#246;rung kommt und ist somit eine pr&#228;ventive und unterst&#252;tzende Methode.
                </Text>

                <Text fontSize={'xl'}>
                    Geeignet ist sie f&#252;r alle Menschen, die an sich arbeiten wollen oder durch eine schwierige Phase in ihrem Leben gehen, sei es pers&#246;nlich, famili&#228;r oder beruflich.
                </Text>
            </Stack>

            <StackDivider />

            {/* Gesangstherapie */}
            <Stack
            spacing={{ base: 8, md: 14 }}>
                <Heading>Gesangstherapie</Heading>
                <Text fontSize={'xl'}>Alles was du &#252;ber Gesangstherapie nach C.Wijnen & J.Spitzer wissen musst</Text>

                <hr />

                <Stack
                as={Box}
                textAlign={'left'}>
                    <Heading>Was ist Gesangstherapie?</Heading>
                    <Text fontSize={'xl'}>
                        Du kennst vielleicht schon das Prinzip einer Gespr&#228;chstherapie. Man spricht &#252;ber das, was einen besch&#228;ftigt, was einen belastet.
                        Doch manchmal reicht Reden nicht aus, manchmal kann die Sprache nicht das ausdr&#252;cken, was uns wirklich bewegt, tief in uns vergraben.
                    </Text>

                    <Text fontSize={'xl'}>
                        Dann kann Gesangstherapie helfen.
                        Hier ist die Stimme in ihrer Gesamtheit das Werkzeug.
                        Sie dient als Ausdrucksmittel, Ventil, Katalysator, Br&#252;cke zum Unbewussten.
                    </Text>

                    <Text fontSize={'xl'}>
                        Das Wichtigste an der ganzen Sache: Du musst nicht singen k&#246;nnen!
                        Und selbst, wenn du es kannst, musst du dir keine Gedanken dar&#252;ber machen, wie du klingst.
                        Es gibt keine Wertung, kein richtig oder falsch.
                        Einfach nur sein und klingen.
                    </Text>
                </Stack>

                <hr />

                <Stack
                as={Box}
                textAlign={'left'}>
                    <Heading>Einzelsetting</Heading>
                    <Text fontSize={'xl'}>
                        Was passiert genau in einer Gesangstherapie-Stunde?
                        Das kommt ganz darauf an, mit was f&#252;r Themen und W&#252;nschen du zu mir kommst.
                        Es gibt die M&#246;glichkeit heilsame Lieder zu singen oder auch Mantras.
                        Einstimmig, mehrstimmig - der Kreativit&#228;t sind keine Grenzen gesetzt und es gibt viel Raum f&#252;r Improvisation.
                        Au&#223;erdem ist das freie T&#246;nen ein gro&#223;er Bestandteil der Gesangstherapie, da es hier den gr&#246;&#223;ten Freiraum f&#252;r eigenen Ausdruck gibt.
                        Doch nichts ist ein Muss.
                        Im Mittelpunkt bleibt immer, dass du dich wohlf&#252;hlst.
                    </Text>

                    <Text fontSize={'xl'}>
                        Zus&#228;tzlich zur aktiven Gesangstherapie gibt es auch die rezeptive.
                        Hier steht das Besingen im Vordergrund w&#228;hrend du dich einfach fallen lassen und genie&#223;en kannst.
                    </Text>

                    <Text fontSize={'xl'}>
                        Grunds&3228;tzlich soll ein Raum geschaffen werden, in welchem du dich angenommen und sicher f&#252;hlst.
                        Hier kannst du einfach sein, so wie du bist.
                        Alles ist richtig, du musst keinerlei Erwartungen erf&#252;llen und kannst deine Last abgeben.
                    </Text>

                    <Spacer />

                    <Heading>Welche Themen kann man bearbeiten?</Heading>
                    <Text fontSize={'xl'}>
                        Auf der psychischen Ebene:
                    </Text>

                    <UnorderedList>
                        <ListItem fontSize={'xl'}>Alle Emotionen (z.B. Wut, Trauer) ersp&#252;ren, ausdr&#252;cken und aufl&#246;sen</ListItem>
                        <ListItem fontSize={'xl'}>Arbeit mit dem inneren Kind</ListItem>
                        <ListItem fontSize={'xl'}>Blockaden l&#246;sen</ListItem>
                        <ListItem fontSize={'xl'}>Bed&#252;rfnisse erkennen und ausdr&#252;cken</ListItem>
                        <ListItem fontSize={'xl'}>Selbstakzeptanz, Selbstliebe</ListItem>
                        <ListItem fontSize={'xl'}>Unterstützung bei psychischen St&#246;rungen (z.B. Angstst&#246;rungen, Depressionen, B&#252;hnenangst) </ListItem>
                    </UnorderedList>

                    <Text fontSize={'xl'}>Auf der k&#246;rperlichen Ebene:</Text>
                    <UnorderedList>
                        <ListItem fontSize={'xl'}>Unterst&#252;tzung bei Atemproblemen</ListItem>
                        <ListItem fontSize={'xl'}>Unterst&#252;tzung des Immunsystems (z.B. bei Autoimmunerkrankungen)</ListItem>
                        <ListItem fontSize={'xl'}>Unterst&#252;tzung bei Stimm- und Sprechproblemen (z.B. Heiserkeit, Stottern)</ListItem>
                        <ListItem fontSize={'xl'}>Unterst&#252;tzung bei psychosomatischen Beschwerden, (z.B. Schmerzen, Verdauungsst&#246;rungen)</ListItem>
                        <ListItem fontSize={'xl'}>Singen w&#228;hrend der Schwangerschaft & Geburt</ListItem>
                    </UnorderedList>
                </Stack>
            </Stack>

            <hr />

            <StackDivider />

            <Stack>
                <Heading>Gruppensetting</Heading>
                <Text fontSize={'xl'}>
                    Gemeinsames kreatives Entdecken der eigenen Stimme und ihres heilsamen Potentials.
                </Text>
                <Text fontSize={'xl'}>
                    Wir singen Lieder aus aller Welt und unterschiedlichsten Kulturen. Hinzu kommen Achtsamkeits- und Entspannungs&#252;bungen, freies Bewegen, alles verbunden durch einen spielerischen Hauch.
                    Es geht um das gemeinsame Genie&#223;en, frei sein zu k&#246;nnen, die Stimmen miteinander zu verbinden und die Gl&#252;ckshormone herauszulocken.
                </Text>
                <Text fontSize={'xl'}>
                    Auch hier ist keine Gesangserfahrung notwendig und niemand muss alleine etwas vorsingen.
                </Text>
            </Stack>

            <StackDivider />

            <Stack>
                <Heading>Was ist Gesangstherapie nicht?</Heading>
                <Text fontSize={'xl'}>
                    Gesangstherapie ist kein Gesangsunterricht.
                    Es geht nicht um Technik und nicht um “sch&#246;n” singen.
                </Text>
                <Text fontSize={'xl'}>
                    Ebenso ist es keine Psychotherapie und auch kein Ersatz daf&#252;r. Klient:innen sind selbst daf&#252;r verantwortlich, sich die n&#246;tige psychotherapeutische Hilfe zu holen.
                    Nat&#252;rlich kann ich dabei aber behilflich sein.
                </Text>
            </Stack>

            <Stack>
                <Heading>Kontaktiere mich</Heading>
                <Text fontSize={'xl'}>
                    Wenn du Fragen hast, kannst du mir gerne schreiben.
                </Text>
            </Stack>
            <Center>
                <Button>
                    <Link href="/kontakt">Kontaktiere mich</Link>
                </Button>
            </Center>

        </Stack>
    )
}

{/* Mobile */}
const MobilePsychologische = () => {

    return (
        <Stack
        py={10}
        spacing={{ base: 8, md: 14 }}>
            {/* Psychologische */}
            <Stack>
                <Heading>Psychologische Beratung</Heading>
                <Text fontSize={'xl'}>
                    Psychologische Beratung kann helfen, wenn man mit der aktuellen Situation unzufrieden ist, sich belastet f&#252;hlt oder nicht wei&#223;,
                    wie es weiter gehen soll.
                    Sie unterst&#252;tzt dabei, L&#246;sungen und neue Wege zu finden.
                    Hierbei kann schon ein ganz spezifisches Ziel vorliegen oder wir erarbeiten ein Ziel in der Beratung.
                </Text>

                <Text fontSize={'xl'}>
                    Ich kann dich einf&#252;hlsam und bedacht durch schwierige Zeiten, Lebenskrisen und neue Herausforderungen begleiten.
                    Als Psychologin ist es mir wichtig, hierbei immer die berufsethischen und wissenschaftlichen Standards einzuhalten.
                </Text>
            </Stack>

            <Stack
            textAlign={'left'}>
                <Heading>Welche Themen kann man bearbeiten?</Heading>
                <UnorderedList>
                    <ListItem fontSize={'xl'}>Visionen und Ziele erarbeiten</ListItem>
                    <ListItem fontSize={'xl'}>Ressourcen erarbeiten und st&#228;rken</ListItem>
                    <ListItem fontSize={'xl'}>Unterst&#252;tzung in schwierigen Lebensphasen (z.B. Verlust einer geliebten Person, Krankheit, berufliche Neuorientierung)</ListItem>
                    <ListItem fontSize={'xl'}>mit den eigenen Emotionen besser in Kontakt kommen</ListItem>
                    <ListItem fontSize={'xl'}>Arbeit mit dem inneren Kind</ListItem>
                    <ListItem fontSize={'xl'}>Bed&#252;rfnisse erkennen und ausdrücken</ListItem>
                    <ListItem fontSize={'xl'}>Selbstakzeptanz, Selbstliebe</ListItem>
                    <ListItem fontSize={'xl'}>Lampenfieber</ListItem>
                </UnorderedList>

                <Text fontSize={'xl'}>
                    Psychologische Beratung dient nicht zur Behandlung oder Diagnostik psychischer St&#246;rungen, wie es die Psychotherapie tut.
                    Sie greift schon fr&#252;her, bevor es &#252;berhaupt zu einer St&#246;rung kommt und ist somit eine pr&#228;ventive und unterst&#252;tzende Methode.
                </Text>

                <Text fontSize={'xl'}>
                    Geeignet ist sie f&#252;r alle Menschen, die an sich arbeiten wollen oder durch eine schwierige Phase in ihrem Leben gehen, sei es pers&#246;nlich, famili&#228;r oder beruflich.
                </Text>
            </Stack>

            <StackDivider />

            {/* Gesangstherapie */}
            <Stack>
                <Heading>Gesangstherapie</Heading>
                <Text fontSize={'xl'}>Alles was du &#252;ber Gesangstherapie nach C.Wijnen & J.Spitzer wissen musst</Text>

                <hr />
                <Heading>Was ist Gesangstherapie?</Heading>
                <Text fontSize={'xl'}>
                    Du kennst vielleicht schon das Prinzip einer Gespr&#228;chstherapie. Man spricht &#252;ber das, was einen besch&#228;ftigt, was einen belastet.
                    Doch manchmal reicht Reden nicht aus, manchmal kann die Sprache nicht das ausdr&#252;cken, was uns wirklich bewegt, tief in uns vergraben.
                </Text>

                <Text fontSize={'xl'}>
                    Dann kann Gesangstherapie helfen.
                    Hier ist die Stimme in ihrer Gesamtheit das Werkzeug.
                    Sie dient als Ausdrucksmittel, Ventil, Katalysator, Br&#252;cke zum Unbewussten.
                </Text>

                <Text fontSize={'xl'}>
                    Das Wichtigste an der ganzen Sache: Du musst nicht singen k&#246;nnen!
                    Und selbst, wenn du es kannst, musst du dir keine Gedanken dar&#252;ber machen, wie du klingst.
                    Es gibt keine Wertung, kein richtig oder falsch.
                    Einfach nur sein und klingen.
                </Text>

                <hr />

                <Heading>Einzelsetting</Heading>
                <Text fontSize={'xl'}>
                    Was passiert genau in einer Gesangstherapie-Stunde?
                    Das kommt ganz darauf an, mit was f&#252;r Themen und W&#252;nschen du zu mir kommst.
                    Es gibt die M&#246;glichkeit heilsame Lieder zu singen oder auch Mantras.
                    Einstimmig, mehrstimmig - der Kreativit&#228;t sind keine Grenzen gesetzt und es gibt viel Raum f&#252;r Improvisation.
                    Au&#223;erdem ist das freie T&#246;nen ein gro&#223;er Bestandteil der Gesangstherapie, da es hier den gr&#246;&#223;ten Freiraum f&#252;r eigenen Ausdruck gibt.
                    Doch nichts ist ein Muss.
                    Im Mittelpunkt bleibt immer, dass du dich wohlf&#252;hlst.
                </Text>

                <Text fontSize={'xl'}>
                    Zus&#228;tzlich zur aktiven Gesangstherapie gibt es auch die rezeptive.
                    Hier steht das Besingen im Vordergrund w&#228;hrend du dich einfach fallen lassen und genie&#223;en kannst.
                </Text>

                <Text fontSize={'xl'}>
                    Grunds&3228;tzlich soll ein Raum geschaffen werden, in welchem du dich angenommen und sicher f&#252;hlst.
                    Hier kannst du einfach sein, so wie du bist.
                    Alles ist richtig, du musst keinerlei Erwartungen erf&#252;llen und kannst deine Last abgeben.
                </Text>

                <Heading>Welche Themen kann man bearbeiten?</Heading>
                <Text fontSize={'xl'}>
                    Auf der psychischen Ebene:
                </Text>

                <UnorderedList>
                    <ListItem fontSize={'xl'}>Alle Emotionen (z.B. Wut, Trauer) ersp&#252;ren, ausdr&#252;cken und aufl&#246;sen</ListItem>
                    <ListItem fontSize={'xl'}>Arbeit mit dem inneren Kind</ListItem>
                    <ListItem fontSize={'xl'}>Blockaden l&#246;sen</ListItem>
                    <ListItem fontSize={'xl'}>Bed&#252;rfnisse erkennen und ausdr&#252;cken</ListItem>
                    <ListItem fontSize={'xl'}>Selbstakzeptanz, Selbstliebe</ListItem>
                    <ListItem fontSize={'xl'}>Unterstützung bei psychischen St&#246;rungen (z.B. Angstst&#246;rungen, Depressionen, B&#252;hnenangst) </ListItem>
                </UnorderedList>

                <Text fontSize={'xl'}>Auf der k&#246;rperlichen Ebene:</Text>
                <UnorderedList>
                    <ListItem fontSize={'xl'}>Unterst&#252;tzung bei Atemproblemen</ListItem>
                    <ListItem fontSize={'xl'}>Unterst&#252;tzung des Immunsystems (z.B. bei Autoimmunerkrankungen)</ListItem>
                    <ListItem fontSize={'xl'}>Unterst&#252;tzung bei Stimm- und Sprechproblemen (z.B. Heiserkeit, Stottern)</ListItem>
                    <ListItem fontSize={'xl'}>Unterst&#252;tzung bei psychosomatischen Beschwerden, (z.B. Schmerzen, Verdauungsst&#246;rungen)</ListItem>
                    <ListItem fontSize={'xl'}>Singen w&#228;hrend der Schwangerschaft & Geburt</ListItem>
                </UnorderedList>
            </Stack>

            <hr />

            <StackDivider />

            <Stack>
                <Heading>Gruppensetting</Heading>
                <Text fontSize={'xl'}>
                    Gemeinsames kreatives Entdecken der eigenen Stimme und ihres heilsamen Potentials.
                </Text>
                <Text fontSize={'xl'}>
                    Wir singen Lieder aus aller Welt und unterschiedlichsten Kulturen. Hinzu kommen Achtsamkeits- und Entspannungs&#252;bungen, freies Bewegen, alles verbunden durch einen spielerischen Hauch.
                    Es geht um das gemeinsame Genie&#223;en, frei sein zu k&#246;nnen, die Stimmen miteinander zu verbinden und die Gl&#252;ckshormone herauszulocken.
                </Text>
                <Text fontSize={'xl'}>
                    Auch hier ist keine Gesangserfahrung notwendig und niemand muss alleine etwas vorsingen.
                </Text>
            </Stack>

            <StackDivider />

            <Stack>
                <Heading>Was ist Gesangstherapie nicht?</Heading>
                <Text fontSize={'xl'}>
                    Gesangstherapie ist kein Gesangsunterricht.
                    Es geht nicht um Technik und nicht um “sch&#246;n” singen.
                </Text>
                <Text fontSize={'xl'}>
                    Ebenso ist es keine Psychotherapie und auch kein Ersatz daf&#252;r. Klient:innen sind selbst daf&#252;r verantwortlich, sich die n&#246;tige psychotherapeutische Hilfe zu holen.
                    Nat&#252;rlich kann ich dabei aber behilflich sein.
                </Text>
            </Stack>

            <Stack>
                <Heading>Kontaktiere mich</Heading>
                <Text fontSize={'xl'}>
                    Wenn du Fragen hast, kannst du mir gerne schreiben.
                </Text>
            </Stack>
            <Center>
                <Button>
                    <Link href="/kontakt">Kontaktiere mich</Link>
                </Button>
            </Center>

        </Stack>
    )
}


export default PsychologischePage;